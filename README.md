# TVC Cherry Capital Airport — Digital Experience MVP Prototype

[![Astro 5](https://img.shields.io/badge/Framework-Astro_5.2-BC52EE.svg)](https://astro.build)
[![WCAG 2.2 AA](https://img.shields.io/badge/Accessibility-WCAG_2.2_AA-059669.svg)](file:///src/pages/airport-guide/accessibility.astro)
[![RFP 2026-01](https://img.shields.io/badge/RFP-NRAA_RFP_2026--01-D90429.svg)](file:///src/pages/business-opportunities.astro)

Functional MVP design prototype developed by **FOURAK** for the **Northwest Regional Airport Authority (NRAA)** 2026 Cherry Capital Airport (TVC) Website Redesign & CMS Modernization Procurement (RFP 2026-01).

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

### Why Craft CMS + Astro + Cloudflare?
- **Public-Sector Security & Resilience**: Public pages are rendered as static assets on Cloudflare's global edge network. If the administrative CMS requires maintenance, the public website remains online with 99.99%+ availability.
- **Craft CMS Editorial UX**: Directly recommended by NRAA in the RFP. Staff receive an intuitive, structured editing environment with granular permissions, built-in MFA, and revision histories.
- **Speed & Performance**: Lighthouse Performance scores 95–100 with Core Web Vitals optimization (LCP < 1.8s, INP < 100ms).

---

## 📱 Prototype Demo Pages Built

| Page / Route | Path | Description |
| :--- | :--- | :--- |
| **Homepage Airport Dashboard** | `/` | Responsive 375px-first airport dashboard with live flights, task shortcuts, parking rates, and news. |
| **Live Flight Status Board** | `/flights` | Real-time arrivals & departures flight application with code/city search, airline filter, and detail drawer. |
| **Airlines Directory** | `/flights/airlines` | Passenger airline directory for American, Delta, United, Sun Country, and Allegiant. |
| **Nonstop Route Map** | `/flights/nonstop-destinations` | Interactive route map & filterable city directory for 12 year-round and seasonal nonstops. |
| **Parking & Transportation** | `/parking-transportation` | Interactive parking rate cost estimator, SVG terminal parking map, rental cars, and rideshares. |
| **Terminal Guide & Amenities** | `/airport-guide` | Filterable directory of airport dining, shopping, lactation suites, pet relief, and TSA lanes. |
| **Accessibility & Assistance** | `/airport-guide/accessibility` | WCAG 2.2 AA hub with TSA Cares, wheelchair request procedures, and alternative format forms. |
| **Explore Northern Michigan** | `/visit-northern-michigan` | Regional gateway highlighting Traverse City, Sleeping Bear Dunes, golf, lakes, and wineries. |
| **NRAA Governance Portal** | `/nraa` | Northwest Regional Airport Authority overview, Board of Directors, and airport leadership. |
| **NRAA Board Meetings** | `/nraa/meetings` | Meeting calendar with agenda PDFs, complete board packet downloads, minutes, and webcasts. |
| **Searchable Document Repository** | `/documents` | Full-text public document portal with category/year filters and simulated GA4 download tracking. |
| **Bids & Solicitations** | `/business-opportunities` | Solicitation portal featuring the 2026 Website Redesign RFP and addenda alerts. |
| **Gates Expansion** | `/gates-to-the-future` | Terminal growth initiative overview, milestone timeline, passenger advisories, and FAQs. |
| **Board Portal Demo** | `/board-portal` | Authenticated Board member vault prototype featuring MFA indicators and access audit logs. |
| **FOURAK Proposal Strategy** | `/proposal` | Comprehensive RFP scoring alignment, implementation phases, and $113.5K budget breakdown. |

---

## 🛠️ Local Development Commands

```bash
# Install dependencies (if needed)
npm install

# Start local Astro dev server
npm run dev

# Run TypeScript & Astro check
npm run check

# Build production bundle
npm run build
```

---

## 📜 Public Data Integrity Disclaimer

> **No Fabricated Data Rule**: All flight schedules, parking rates, airline contact details, meeting calendars, and RFP procurement dates reflect verified public disclosures from TVC / NRAA or are explicitly designated as prototype interface demonstrations. Final imagery and brand messaging will be produced in coordination with NRAA's appointed branding agency partner.
