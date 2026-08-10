import os
import re
import json
import hashlib
import urllib.request
import urllib.parse
from html.parser import HTMLParser

BASE_URL = 'https://tvcairport.com/'
HOST = 'tvcairport.com'

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

visited_pages = set()
pages_to_visit = [BASE_URL]
discovered_media = set()

class MediaExtractor(HTMLParser):
    def __init__(self, page_url):
        super().__init__()
        self.page_url = page_url
        self.media_urls = set()
        self.page_links = set()

    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)
        
        # Link tag
        if tag == 'a' and 'href' in attr_dict:
            href = attr_dict['href']
            full = urllib.parse.urljoin(self.page_url, href)
            if full.startswith('https://tvcairport.com') or full.startswith('http://tvcairport.com'):
                clean = full.split('#')[0]
                if clean not in visited_pages and not re.search(r'\.(pdf|png|jpg|jpeg|gif|webp|svg|zip)$', clean, re.I):
                    self.page_links.add(clean)

        # Image tags
        if tag in ['img', 'source', 'video', 'poster']:
            for key in ['src', 'data-src', 'data-original', 'poster', 'data-lazy-src']:
                if key in attr_dict:
                    src = attr_dict[key]
                    full = urllib.parse.urljoin(self.page_url, src)
                    if HOST in full:
                        self.media_urls.add((full, attr_dict.get('alt', '')))

            if 'srcset' in attr_dict:
                for parts in attr_dict['srcset'].split(','):
                    url_part = parts.strip().split(' ')[0]
                    if url_part:
                        full = urllib.parse.urljoin(self.page_url, url_part)
                        if HOST in full:
                            self.media_urls.add((full, attr_dict.get('alt', '')))

        # Favicon / meta icons
        if tag == 'link' and attr_dict.get('rel') in ['icon', 'shortcut icon', 'apple-touch-icon', 'mask-icon']:
            if 'href' in attr_dict:
                full = urllib.parse.urljoin(self.page_url, attr_dict['href'])
                if HOST in full:
                    self.media_urls.add((full, 'Site Icon'))

        # OG / Twitter images
        if tag == 'meta' and attr_dict.get('property') in ['og:image', 'twitter:image']:
            if 'content' in attr_dict:
                full = urllib.parse.urljoin(self.page_url, attr_dict['content'])
                if HOST in full:
                    self.media_urls.add((full, 'Social Share Card'))

def crawl():
    print("Starting HTML crawl of tvcairport.com...")
    all_media = []

    # Target specific high-value pages if crawler misses them
    seed_pages = [
        'https://tvcairport.com/',
        'https://tvcairport.com/flights/',
        'https://tvcairport.com/parking/',
        'https://tvcairport.com/ground-transportation/',
        'https://tvcairport.com/airlines/',
        'https://tvcairport.com/nonstop-destinations/',
        'https://tvcairport.com/gates-to-the-future/',
        'https://tvcairport.com/terminal-map/',
        'https://tvcairport.com/nraa/',
        'https://tvcairport.com/news/',
        'https://tvcairport.com/contact/',
        'https://tvcairport.com/accessibility/'
    ]

    for p in seed_pages:
        if p not in pages_to_visit:
            pages_to_visit.append(p)

    while pages_to_visit and len(visited_pages) < 25:
        url = pages_to_visit.pop(0)
        if url in visited_pages:
            continue
        visited_pages.add(url)

        try:
            print(f"Crawling: {url}")
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=10) as resp:
                content_type = resp.headers.get('Content-Type', '')
                if 'html' in content_type:
                    html = resp.read().decode('utf-8', errors='ignore')

                    # Parse CSS background-images
                    bg_urls = re.findall(r'url\([\'\"]?(https?://[^\'\"]+)[\'\"]?\)', html)
                    for bg in bg_urls:
                        if HOST in bg:
                            all_media.append((bg, url, 'Background Image'))

                    # Parse inline media
                    parser = MediaExtractor(url)
                    parser.feed(html)

                    for m_url, alt in parser.media_urls:
                        all_media.append((m_url, url, alt))

                    for link in parser.page_links:
                        if link not in visited_pages and link not in pages_to_visit:
                            pages_to_visit.append(link)
        except Exception as e:
            print(f"Skipping {url}: {e}")

    print(f"Crawl complete. Total media references collected: {len(all_media)}")
    return all_media

def classify_asset(filename, alt_text, url):
    fn = filename.lower()
    alt = alt_text.lower()
    u = url.lower()

    if any(k in fn or k in u for k in ['logo', 'header-logo', 'footer-logo', 'site-logo', 'app-icon', 'custom-logo']):
        return 'brand', 'public/brand/originals/'
    if any(k in fn or k in u or k in alt for k in ['gates', 'future', 'expansion', 'rendering', 'addition', 'construction']):
        return 'gates-to-the-future', 'public/media/gates-to-the-future/'
    if any(k in fn or k in u or k in alt for k in ['airline', 'allegiant', 'american', 'delta', 'sun-country', 'united']):
        return 'airlines', 'public/media/airlines/'
    if any(k in fn or k in u or k in alt for k in ['parking', 'garage', 'lot', 'pickup', 'dropoff', 'transportation']):
        return 'parking', 'public/media/parking/'
    if any(k in fn or k in u or k in alt for k in ['terminal', 'concourse', 'gate', 'inside', 'restroom', 'baggage']):
        return 'terminal', 'public/media/terminal/'
    if any(k in fn or k in u or k in alt for k in ['map', 'diagram', 'layout', 'graphic']):
        return 'maps', 'public/media/maps/'
    if any(k in fn or k in u or k in alt for k in ['lake', 'sunrise', 'sunset', 'michigan', 'traverse', 'dunes', 'scenery', 'visitors']):
        return 'northern-michigan', 'public/media/northern-michigan/'
    if any(k in fn or k in u or k in alt for k in ['plane', 'aircraft', 'flight', 'runway', 'apron', 'aviation']):
        return 'aircraft', 'public/media/aircraft/'

    return 'airport', 'public/media/airport/'

def process_downloads(media_list):
    hashes = {}
    manifest = []
    brand_manifest = {
        "organization": "Cherry Capital Airport",
        "iata": "TVC",
        "authority": "Northwest Regional Airport Authority",
        "logo": "/images/logos/tvc-logo-header.png",
        "logoFooter": "/images/logos/tvc-logo-footer.png",
        "favicon": "/favicon.ico",
        "appleTouchIcon": "/images/logos/tvc-app-icon.png",
        "sourceUrls": []
    }

    count = 0
    for m_url, page_url, alt in media_list:
        # Ignore non-image/media
        if not re.search(r'\.(png|jpg|jpeg|gif|webp|svg|ico)$', m_url, re.I):
            continue

        orig_filename = os.path.basename(urllib.parse.urlparse(m_url).path)
        if not orig_filename:
            continue

        try:
            req = urllib.request.Request(m_url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = resp.read()

            sha256 = hashlib.sha256(data).hexdigest()
            if sha256 in hashes:
                print(f"Duplicate content skipped: {orig_filename}")
                continue

            hashes[sha256] = m_url
            category, target_dir = classify_asset(orig_filename, alt, m_url)
            os.makedirs(target_dir, exist_ok=True)
            os.makedirs('public/media/originals/', exist_ok=True)

            # Save original copy
            orig_save_path = os.path.join('public/media/originals/', orig_filename)
            with open(orig_save_path, 'wb') as f:
                f.write(data)

            # Save categorized copy
            cat_save_path = os.path.join(target_dir, orig_filename)
            with open(cat_save_path, 'wb') as f:
                f.write(data)

            count += 1
            web_path = '/' + cat_save_path.replace('public/', '')
            
            entry = {
                "id": f"media-{count}",
                "filename": orig_filename,
                "originalFilename": orig_filename,
                "localPath": web_path,
                "sourceUrl": m_url,
                "sourcePage": page_url,
                "mimeType": f"image/{orig_filename.split('.')[-1]}",
                "fileSize": len(data),
                "altTextOriginal": alt,
                "category": category,
                "isBrandAsset": category == 'brand',
                "isLogo": 'logo' in orig_filename.lower(),
                "sha256": sha256
            }
            manifest.append(entry)
            print(f"[{count}] Saved ({category}): {orig_filename} ({len(data)} bytes)")

            if category == 'brand':
                brand_manifest["sourceUrls"].append(m_url)

        except Exception as e:
            print(f"Error downloading {m_url}: {e}")

    # Write manifests
    os.makedirs('src/data', exist_ok=True)
    with open('src/data/media.json', 'w') as f:
        json.dump(manifest, f, indent=2)

    with open('src/data/brand.json', 'w') as f:
        json.dump(brand_manifest, f, indent=2)

    print(f"\nHarvest completed! Total unique first-party assets downloaded & cataloged: {len(manifest)}")

if __name__ == '__main__':
    media = crawl()
    process_downloads(media)
