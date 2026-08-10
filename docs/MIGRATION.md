# Legacy Website Migration & Redirect Strategy

**Source Site**: `https://tvcairport.com/` (Legacy WordPress)  
**Destination Site**: `https://www.tvcairport.com/` (Astro + Craft CMS)  

---

## 1. Migration Protocol (6-Step Lifecycle)

1. **Inventory & Crawl**: Automated crawling of legacy site URLs, pages, attachments, PDFs, and document archives.
2. **Classification Matrix**:
   - `KEEP`: Core operational & passenger content (Flights, Parking, Terminal Info).
   - `REWRITE`: Outdated pages structured into modern components.
   - `MERGE`: Fragmented subpages consolidated into comprehensive hubs.
   - `ARCHIVE / LEGAL RECORD`: Preservation of all historical NRAA board agendas, packets, minutes, and audits.
   - `DELETE & REDIRECT`: 301 permanent redirect mapped for deprecated URLs.
3. **URL Mapping & Redirect Ledger**: Preserving SEO rankings, inbound backlinks, and bookmark stability via Cloudflare 301 redirect rules.
4. **Data Extraction & Remediation**: Migration of structured HTML and PDF assets into Craft CMS entries.
5. **QA & Broken Link Validation**: Verification of internal link integrity, file attachments, and metadata.
6. **Production Cutover**: DNS update to Cloudflare Edge with zero downtime.
