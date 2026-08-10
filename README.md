# TVC Cherry Capital Airport — Digital Experience MVP Prototype

[![Live Demo](https://img.shields.io/badge/Live_Demo-tvcairport--com.pages.dev-0EA5E9.svg?style=for-the-badge&logo=cloudflare)](https://tvcairport-com.pages.dev/)
[![Astro 5](https://img.shields.io/badge/Framework-Astro_5.2-BC52EE.svg?style=for-the-badge&logo=astro)](https://astro.build)
[![WCAG 2.2 AA](https://img.shields.io/badge/Accessibility-WCAG_2.2_AA-059669.svg?style=for-the-badge)](https://tvcairport-com.pages.dev/airport-guide/accessibility)
[![RFP 2026-01](https://img.shields.io/badge/RFP-NRAA_RFP_2026--01-D90429.svg?style=for-the-badge)](https://tvcairport-com.pages.dev/proposal)

Functional MVP design prototype developed by **FOURAK** for the **Northwest Regional Airport Authority (NRAA)** 2026 Cherry Capital Airport (TVC) Website Redesign & CMS Modernization Procurement (RFP 2026-01).

---

## 🌐 Live Interactive Demo

> **URL**: [https://tvcairport-com.pages.dev/](https://tvcairport-com.pages.dev/)  
> **Host**: Cloudflare Pages Global Edge Network  
> **Performance**: 95+ Core Web Vitals, sub-200ms edge rendering  

---

## 🚀 Recommended Decoupled Architecture

```text
                   PASSENGERS / PUBLIC / MOBILE
                                │
                                ▼
                       CLOUDFLARE EDGE
                  CDN · TLS · WAF · DDoS
                                │
                                ▼
                        ASTRO FRONTEND
                  https://www.tvcairport.com
                    │                 │
          ┌─────────┘                 └──────────┐
          ▼                                      ▼
    CRAFT CMS                              FLIGHT DATA
 Headless Content Platform             Operational Feed
 (cms.tvcairport.com)                   (FlightView / API)
          │
          ▼
   PostgreSQL / MySQL
   • NRAA Public Documents & Packets
   • Board Meetings & Agendas
   • Operational Advisories & News
   • Parking Rates & Concessions
```

---

## 📱 Prototype Interactive Routes (23 Total)

| Page / Route | Path | Description |
| :--- | :--- | :--- |
| **Homepage Airport Dashboard** | [`/`](https://tvcairport-com.pages.dev/) | 375px-first airport dashboard with live flights, task shortcuts, parking rates, and travel advisories. |
| **Live Flight Status Board** | [`/flights`](https://tvcairport-com.pages.dev/flights) | Real-time arrivals & departures board with flight code/city search and carrier filters. |
| **Airlines Directory** | [`/flights/airlines`](https://tvcairport-com.pages.dev/flights/airlines) | Directory for Delta, American, United, Allegiant, and Sun Country. |
| **Nonstop Route Map** | [`/flights/nonstop-destinations`](https://tvcairport-com.pages.dev/flights/nonstop-destinations) | Interactive route map & filterable city directory for 12 year-round and seasonal nonstops. |
| **Parking & Transportation** | [`/parking-transportation`](https://tvcairport-com.pages.dev/parking-transportation) | Interactive parking rate fee calculator, SVG terminal parking map, rental cars, and rideshare. |
| **Why Fly TVC Calculator** | [`/why-tvc`](https://tvcairport-com.pages.dev/why-tvc) | Interactive **Drive vs. Fly Savings Calculator** comparing time/gas/parking against DTW and ORD. |
| **Terminal Guide & Amenities** | [`/airport-guide`](https://tvcairport-com.pages.dev/airport-guide) | Searchable directory of airport dining, shopping, lactation suites, pet relief, and TSA lanes. |
| **Accessibility & TSA Cares** | [`/airport-guide/accessibility`](https://tvcairport-com.pages.dev/airport-guide/accessibility) | WCAG 2.2 AA hub with TSA Cares, wheelchair request procedures, and alternative format forms. |
| **Corporate Travel & FBO** | [`/business-travel`](https://tvcairport-com.pages.dev/business-travel) | Executive travel services and Avflight General Aviation FBO radio/runway specs. |
| **Explore Northern Michigan** | [`/visit-northern-michigan`](https://tvcairport-com.pages.dev/visit-northern-michigan) | Regional gateway highlighting Traverse City, Sleeping Bear Dunes, golf, and lakes. |
| **NRAA Governance Portal** | [`/nraa`](https://tvcairport-com.pages.dev/nraa) | Northwest Regional Airport Authority overview, Board of Directors, and leadership. |
| **NRAA Board Meetings** | [`/nraa/meetings`](https://tvcairport-com.pages.dev/nraa/meetings) | Meeting calendar with agenda PDFs, complete board packet downloads, minutes, and webcasts. |
| **Searchable Document Repository** | [`/documents`](https://tvcairport-com.pages.dev/documents) | Full-text public document portal with category/year filters and GA4 download tracking. |
| **Bids & Solicitations** | [`/business-opportunities`](https://tvcairport-com.pages.dev/business-opportunities) | Solicitation portal featuring the 2026 Website Redesign RFP and addenda alerts. |
| **Gates Expansion** | [`/gates-to-the-future`](https://tvcairport-com.pages.dev/gates-to-the-future) | Terminal growth initiative overview, milestone timeline, passenger advisories, and FAQs. |
| **Board Portal Demo** | [`/board-portal`](https://tvcairport-com.pages.dev/board-portal) | Authenticated Board member vault prototype featuring MFA indicators and audit logs. |
| **Careers & Employment** | [`/careers`](https://tvcairport-com.pages.dev/careers) | Open NRAA positions catalog with benefit highlights and an interactive Online Application Modal. |
| **Contact Us & Directory** | [`/contact`](https://tvcairport-com.pages.dev/contact) | Department contact directory and interactive customer service inquiry form. |
| **Lost & Found Services** | [`/lost-and-found`](https://tvcairport-com.pages.dev/lost-and-found) | 3-way jurisdiction guidance and terminal lost item claim submission form. |
| **Passenger FAQ** | [`/faq`](https://tvcairport-com.pages.dev/faq) | Searchable passenger Q&A hub for TSA, parking, baggage, pets, and wheelchairs. |
| **News & Advisories** | [`/news`](https://tvcairport-com.pages.dev/news) | Press releases, operational notices, and media relations contacts. |
| **FOURAK Proposal Strategy** | [`/proposal`](https://tvcairport-com.pages.dev/proposal) | Comprehensive RFP scoring alignment, implementation phases, and $113.5K budget breakdown. |

---

## 📚 Project Documentation (`docs/`)

- **[docs/PROPOSAL.md](docs/PROPOSAL.md)** — Complete FOURAK Proposal Response for RFP 2026-01.
- **[docs/PRD.md](docs/PRD.md)** — Full Product Requirements Document & MVP Specification.
- **[docs/CONTENT_MODEL.md](docs/CONTENT_MODEL.md)** — Craft CMS matrix schemas & GraphQL specifications.
- **[docs/ACCESSIBILITY.md](docs/ACCESSIBILITY.md)** — WCAG 2.2 AA testing & remediation standards.
- **[docs/DATA_SOURCES.md](docs/DATA_SOURCES.md)** — Public data sources & Non-Fabrication Rule commitments.
- **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)** — Decoupled Astro + Craft CMS + Cloudflare topology.
- **[docs/MIGRATION.md](docs/MIGRATION.md)** — Legacy site crawl, classification matrix, and 301 redirect ledger.
- **[docs/DEMO_NOTES.md](docs/DEMO_NOTES.md)** — NRAA evaluator demo walkthrough guide.

---

## 🛠️ Local Development & Audit Commands

```bash
# Install dependencies
npm install

# Start local Astro dev server
npm run dev

# Run TypeScript & Astro check
npm run check

# Build static production bundle into dist/
npm run build

# Run pre-submission route audit
node scripts/build_proposal_summary.js
```

---

## 📜 Public Data Integrity Disclaimer

> **No Fabricated Data Rule**: All flight schedules, parking rates, airline contact details, meeting calendars, and RFP procurement dates reflect verified public disclosures from TVC / NRAA or are explicitly designated as prototype interface demonstrations. Final imagery and brand messaging will be produced in coordination with NRAA's appointed branding agency partner.
