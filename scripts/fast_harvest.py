import os
import re
import json
import hashlib
import urllib.request
import urllib.parse

BASE_URL = 'https://tvcairport.com/'
HOST = 'tvcairport.com'

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'
}

SEED_URLS = [
    'https://tvcairport.com/',
    'https://tvcairport.com/flights/',
    'https://tvcairport.com/parking/',
    'https://tvcairport.com/airlines/',
    'https://tvcairport.com/nonstop-flights/',
    'https://tvcairport.com/gates-to-the-future/',
    'https://tvcairport.com/terminal-map/',
    'https://tvcairport.com/nraa/',
    'https://tvcairport.com/news/',
    'https://tvcairport.com/contact/'
]

def fetch_media_urls():
    media_urls = set()
    for url in SEED_URLS:
        try:
            print(f"Fetching HTML: {url}")
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=5) as resp:
                html = resp.read().decode('utf-8', errors='ignore')
                
                # Regex for images / source / og images
                found = re.findall(r'https?://[^\s\"\'>]+\.(?:png|jpg|jpeg|gif|webp|svg|ico)', html, re.IGNORECASE)
                for f in found:
                    if HOST in f:
                        media_urls.add(f)
        except Exception as e:
            print(f"Error fetching {url}: {e}")
    return list(media_urls)

def classify(fn):
    fn_lower = fn.lower()
    if any(k in fn_lower for k in ['logo', 'app-icon', 'favicon', 'brand']):
        return 'brand', 'public/brand/web/'
    if any(k in fn_lower for k in ['gates', 'future', 'expansion', 'rendering', 'addition', 'construction']):
        return 'gates-to-the-future', 'public/media/gates-to-the-future/'
    if any(k in fn_lower for k in ['american', 'delta', 'united', 'allegiant', 'sun-country', 'airline']):
        return 'airlines', 'public/media/airlines/'
    if any(k in fn_lower for k in ['parking', 'garage', 'lot', 'pickup', 'dropoff', 'transportation']):
        return 'parking', 'public/media/parking/'
    if any(k in fn_lower for k in ['terminal', 'concourse', 'gate', 'baggage', 'inside', 'restroom']):
        return 'terminal', 'public/media/terminal/'
    if any(k in fn_lower for k in ['map', 'graphic', 'diagram', 'schedule']):
        return 'maps', 'public/media/maps/'
    if any(k in fn_lower for k in ['lake', 'sunrise', 'sunset', 'michigan', 'traverse', 'dunes', 'scenery', 'bureau', 'visitors']):
        return 'northern-michigan', 'public/media/northern-michigan/'
    if any(k in fn_lower for k in ['plane', 'aircraft', 'flight', 'runway', 'apron']):
        return 'aircraft', 'public/media/aircraft/'

    return 'airport', 'public/media/airport/'

def download_and_catalog(urls):
    hashes = set()
    manifest = []
    
    os.makedirs('public/media/originals', exist_ok=True)
    os.makedirs('public/brand/web', exist_ok=True)
    os.makedirs('public/media/gates-to-the-future', exist_ok=True)
    os.makedirs('public/media/northern-michigan', exist_ok=True)
    os.makedirs('public/media/airport', exist_ok=True)
    os.makedirs('public/media/terminal', exist_ok=True)
    os.makedirs('public/media/parking', exist_ok=True)
    os.makedirs('public/media/airlines', exist_ok=True)
    os.makedirs('public/media/maps', exist_ok=True)

    count = 0
    for u in sorted(urls):
        fn = os.path.basename(urllib.parse.urlparse(u).path)
        if not fn or fn.endswith('.js') or fn.endswith('.css'):
            continue

        try:
            req = urllib.request.Request(u, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=5) as resp:
                data = resp.read()

            sha256 = hashlib.sha256(data).hexdigest()
            if sha256 in hashes:
                continue
            hashes.add(sha256)

            category, dest_dir = classify(fn)
            
            # Save original
            orig_path = os.path.join('public/media/originals', fn)
            with open(orig_path, 'wb') as f:
                f.write(data)

            # Save in categorized folder
            cat_path = os.path.join(dest_dir, fn)
            with open(cat_path, 'wb') as f:
                f.write(data)

            count += 1
            manifest.append({
                "id": f"tvc-media-{count}",
                "filename": fn,
                "localPath": '/' + cat_path.replace('public/', ''),
                "sourceUrl": u,
                "fileSize": len(data),
                "category": category,
                "sha256": sha256
            })
            print(f"[{count}] Downloaded ({category}): {fn}")
        except Exception as e:
            print(f"Skipping {u}: {e}")

    with open('src/data/media.json', 'w') as f:
        json.dump(manifest, f, indent=2)

    print(f"\nSuccessfully downloaded and cataloged {count} authentic TVC media assets.")

if __name__ == '__main__':
    urls = fetch_media_urls()
    download_and_catalog(urls)
