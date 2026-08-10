# TVC Cherry Capital Airport — Full PRD & MVP Demo Specification

**Project**: Cherry Capital Airport / Northwest Regional Airport Authority Website Redesign  
**Internal Project**: `TVCAIRPORT_AG-v101`  
**Current Public Site**: `https://tvcairport.com/`  
**Demo Target**: `https://tvcairport-com.pages.dev/`  
**Agency**: FOURAK / Four Media Group LLC  
**Primary Objective**: Production-quality interactive prototype demonstrating passenger utility, NRAA public governance, and decoupled Craft CMS + Astro architecture for RFP 2026-01.  

---

## 1. Product Vision

Build Cherry Capital Airport a **passenger-first digital airport platform**.

The primary job is not storytelling. The primary job is helping people successfully travel.

### Immediate Passenger Questions
1. Is my flight on time?
2. Where should I park?
3. How much will parking cost?
4. Where do I pick someone up?
5. How do I get from TVC to Traverse City?
6. Where is baggage claim?
7. Where is security?
8. What airport services are available?
9. Is there a current travel advisory?
10. Where are NRAA meetings, agendas and public records?

> **Design Principle**: Operational information always outranks decorative content.

---

## 2. Technical Stack & Decoupled Topology

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
Headless Content Repository            Operational Feed
(cms.tvcairport.com)                   (FlightView / API)
```

- **Frontend**: Astro 5.2 (Static pre-rendering, island hydration, sub-200ms edge response).
- **Styling**: Tailwind CSS + custom CSS tokens for aviation dark/navy/teal palette.
- **CMS**: Craft CMS (Structured content entry, matrix blocks, GraphQL endpoints).
- **Edge Security**: Cloudflare WAF, DDoS mitigation, and SSL/TLS edge caching.
- **Accessibility**: WCAG 2.2 Level AA compliant.

---

## 3. Core Route Matrix & MVP Capabilities

| Route | Page Name | Primary Focus & Interactive Elements |
| :--- | :--- | :--- |
| `/` | **Homepage Dashboard** | Emergency alert banner, live flight toggle (Arrivals/Departures), quick task cards, passenger journey step timeline, parking rate summary, Gates to the Future expansion, regional gateway. |
| `/flights` | **Live Flight Status App** | Arrivals and Departures status board with airline filters, real-time code search, and gate assignments. |
| `/flights/airlines` | **Airlines Directory** | Customer service contacts, gate assignments, baggage links for Delta, American, United, Allegiant, Sun Country. |
| `/flights/nonstop-destinations` | **Nonstop Destinations** | Year-round and seasonal nonstop route directory (ORD, DTW, MSP, ATL, CLT, DFW, DEN, LGA, DCA). |
| `/parking-transportation` | **Parking & Ground Transport** | Interactive parking fee calculator, SVG terminal parking map, rental cars, rideshare, taxi, and transit directions. |
| `/airport-guide` | **Terminal Amenities Guide** | Searchable directory for dining, retail, TSA security, Wi-Fi, lactation rooms, and pet relief areas. |
| `/airport-guide/accessibility` | **Accessibility Hub** | WCAG 2.2 AA guide covering TSA Cares, wheelchair assistance, accessible parking, service animals, and alternative formats. |
| `/visit-northern-michigan` | **Regional Tourism Portal** | Gateway showcasing Traverse City, Sleeping Bear Dunes, Grand Traverse Bay, golf, wineries, and winter sports. |
| `/nraa` | **NRAA Governance Portal** | Airport Authority overview, Board of Directors, executive leadership, and economic impact data. |
| `/nraa/meetings` | **Board Meetings Calendar** | Interactive meeting calendar with downloadable agenda PDFs, complete board packets, minutes, and webcasts. |
| `/documents` | **Public Document Portal** | Full-text searchable document repository with category and year filters, GA4 download event tracking. |
| `/business-opportunities` | **Bids & Solicitations** | Solicitations portal featuring active RFPs (including RFP 2026-01 Website Redesign), deadlines, and addenda. |
| `/gates-to-the-future` | **Capital Expansion** | Terminal growth showcase, architectural renderings, milestone timeline, passenger advisories, and FAQs. |
| `/board-portal` | **Secured Board Vault** | Interactive prototype demonstrating Multi-Factor Authentication (MFA), access controls, and audit logs. |
| `/proposal` | **FOURAK RFP Strategy** | Detailed proposal response breakdown covering RFP evaluation scoring, 16-week timeline, and $113.5K budget model. |

---

## 4. Operational Data Integrity Rule

> **No Fabricated Data Rule**: Never invent live flights, parking prices, emergency advisories, or board meeting dates. All data represents verified public TVC disclosures or is explicitly marked as `INTERFACE PREVIEW`.

---

## 5. Documentation Index

- **Proposal**: [docs/PROPOSAL.md](file:///Volumes/homes/Kevin/AI_BUILDS/TVCAIRPORT-COM_AG-v101/tvcairport-com/docs/PROPOSAL.md)
- **Craft CMS Content Model**: [docs/CONTENT_MODEL.md](file:///Volumes/homes/Kevin/AI_BUILDS/TVCAIRPORT-COM_AG-v101/tvcairport-com/docs/CONTENT_MODEL.md)
- **Accessibility Standard (WCAG 2.2 AA)**: [docs/ACCESSIBILITY.md](file:///Volumes/homes/Kevin/AI_BUILDS/TVCAIRPORT-COM_AG-v101/tvcairport-com/docs/ACCESSIBILITY.md)
- **Data Sources & Provenance**: [docs/DATA_SOURCES.md](file:///Volumes/homes/Kevin/AI_BUILDS/TVCAIRPORT-COM_AG-v101/tvcairport-com/docs/DATA_SOURCES.md)
- **System Architecture**: [docs/ARCHITECTURE.md](file:///Volumes/homes/Kevin/AI_BUILDS/TVCAIRPORT-COM_AG-v101/tvcairport-com/docs/ARCHITECTURE.md)
- **Migration & Redirect Strategy**: [docs/MIGRATION.md](file:///Volumes/homes/Kevin/AI_BUILDS/TVCAIRPORT-COM_AG-v101/tvcairport-com/docs/MIGRATION.md)
- **Demo Notes & Walkthrough**: [docs/DEMO_NOTES.md](file:///Volumes/homes/Kevin/AI_BUILDS/TVCAIRPORT-COM_AG-v101/tvcairport-com/docs/DEMO_NOTES.md)
