# Response to Request for Proposals: Website Redesign, Development, Hosting Transition + Support Services

**Client**: Northwest Regional Airport Authority (NRAA) / Cherry Capital Airport (TVC)  
**Solicitation**: RFP 2026-01  
**Vendor**: FOUR MEDIA GROUP LLC / FOURAK  
**Principal**: Kevin A. Bennett, Owner + Project Lead  
**Contact**: Anchorage, Alaska | 907-202-5642 | kevin@fourak.com | fourak.com  
**Deadline**: August 21, 2026 | 4:30 PM ET | Email PDF submission  
**Proposed Implementation Fee**: $113,500  
**Year 1 Total**: $121,900  

---

## Section 1 / Cover Letter
### Letter of Transmittal
*August 10, 2026*

**Autumn MacClaren**  
Director of Air Service Development and Marketing  
Northwest Regional Airport Authority  
727 Fly Don't Drive, Traverse City, MI 49686  
autumn.macclaren@tvcairport.com  

**Frank Simkins**  
IT Systems Manager  
Northwest Regional Airport Authority  
frank.simkins@tvcairport.com  

**RE: Website Redesign, Development, Hosting Transition, and Support Services**

Dear Ms. MacClaren and Mr. Simkins:

FOURAK, the operating web and creative studio of Four Media Group LLC, is pleased to submit this proposal to redesign, develop, migrate, launch, host and support Cherry Capital Airport's public website. We understand NRAA is not seeking a cosmetic refresh. The new platform must operate as a passenger utility, an airport communications system, a public-document resource, an administrative publishing platform and a digital gateway to Northern Michigan.

Our recommended solution pairs a high-performance Astro public frontend with Craft CMS, an enterprise CMS specifically identified in the RFP, and a Cloudflare security and delivery layer. This gives airport staff structured editorial control while preserving fast public delivery, clear ownership, resilient caching and future portability.

The proposed fixed implementation fee is $113,500. Year 1 managed hosting, maintenance, security, CMS updates, monitoring, backup verification and support is $8,400, for a Year 1 total of $121,900. The schedule is organized around NRAA's anticipated August 31, 2026 kickoff and March 1, 2027 production launch.

FOURAK is intentionally senior-led: direct access to the project lead, a focused technical stack, transparent documentation and specialist validation where independent accessibility, security or infrastructure review adds value.

Thank you for considering FOURAK. We welcome the opportunity to demonstrate the working TVC prototype and discuss how the proposed platform can improve everyday passenger tasks while giving NRAA a durable, staff-manageable digital system.

Sincerely,  
**Kevin A. Bennett**  
Owner + Project Lead  
FOURAK / Four Media Group LLC  

---

## Section 2 / Executive Summary
### Passenger-First Digital Airport
*Operationally useful first. Destination-forward second. Designed for long-term staff ownership.*

- **$113.5K** Fixed Implementation Fee
- **March 1, 2027** Target Production Launch
- **WCAG 2.2 AA** Accessibility Compliance
- **99.9%** Managed Uptime SLA

### Core Outcomes & Design Principles
1. **Passenger-First Hierarchy**: Reorganize navigation around user intent: Fly, Park & Arrive, Airport Guide, Explore Northern Michigan, and NRAA.
2. **Staff Publishing Control**: Structured CMS fields for alerts, news, parking rates, meetings, public documents, projects, forms, employment, and bids.
3. **Public Document Repository**: Searchable portal with categories, meeting relationships, GA4 download tracking, and protected Board content.
4. **Flight Data Integrity**: Integration with authorized operational feeds, visible timestamps, provider attribution, and graceful failure states.
5. **Operational Rule**: Operational information always outranks decorative content. Northern Michigan storytelling enriches the brand without pushing flight status, parking, or security advisories below the fold.

---

## Section 3 / Company, Team & Relevant Experience
### Company Overview
FOURAK is the digital design and web-systems practice of Four Media Group LLC, based in Anchorage, Alaska. Principal Kevin A. Bennett brings 15+ years of relevant experience in modern public platforms, accessibility, performance, and infrastructure.

### Role & Responsibility Matrix
- **Project Lead / Principal**: Kevin A. Bennett (Scope, schedule, budget, stakeholder coordination, accountability)
- **UX + Visual Design**: Kevin A. Bennett (User journeys, IA, responsive design system, prototype)
- **Frontend + Architecture**: Kevin A. Bennett (Astro frontend, Cloudflare delivery, performance, QA)
- **CMS Implementation**: FOURAK + approved specialist capacity (Craft CMS models, workflows, roles)
- **Accessibility QA**: FOURAK + independent validation capacity (WCAG 2.2 AA audits, keyboard/screen-reader testing)
- **Security / Infrastructure QA**: FOURAK + specialist capacity (Vulnerability scans, backup verification)

### Comparable Work
- **CIRI (ciri.com)**: Enterprise institutional content, governance, stakeholder communications, and durable operations.
- **The CIRI Foundation (thecirifoundation.org)**: Public resource platform with structured pathways and accessibility compliance.
- **Alaska Fish Counts (alaskafishcounts.com)**: Statewide authoritative public data platform with live/historical search and mobile-first utility.

---

## Section 4 / Project Understanding & User Experience
### Five Jobs. One Public Platform.
- **Traveling Passengers**: Fast answers under time pressure (Flights, parking, directions, TSA wait, amenities).
- **NRAA Communications**: Rapid emergency alerts, news, project milestones, and public notices.
- **Board / Public Records**: Searchable document archive, meeting agendas, packets, minutes, and secure Board vault.
- **Airport Staff**: Structured CMS fields, role permissions, draft previews, and zero developer lock-in.
- **Regional Visitors & Stakeholders**: Destination gateway storytelling, nonstop route maps, general aviation (FBO), and procurement bids.

---

## Section 5 / Technical Architecture & Security
### Astro + Craft CMS + Cloudflare Edge
```text
                     PUBLIC VISITORS
                            │
                            ▼
                    CLOUDFLARE EDGE
               CDN · TLS · WAF · DDoS · Cache
                            │
                            ▼
                     ASTRO FRONTEND
                https://www.tvcairport.com
                  │                  │
                  ▼                  ▼
             CRAFT CMS          FLIGHT DATA
       (cms.tvcairport.com)    Operational API
```

### Security & Business Continuity
- **Hosting & Infrastructure**: Astro static edge on Cloudflare; Craft CMS application + PostgreSQL on AWS US East (Ohio).
- **Backups**: Daily automated backups with 30-day retention; coverage for CMS database, uploads, repository, and redirects.
- **SLA**: 99.9% uptime SLA for managed hosting components.
- **Accessibility Guarantee**: WCAG 2.2 AA compliance embedded in design system, code, and content workflows.

---

## Section 6 / Implementation Plan & Budget

### Schedule (16 Weeks Total)
1. **Kickoff & Discovery**: Aug 31 – Sep 18, 2026
2. **IA & UX Planning**: Sep 14 – Oct 2, 2026
3. **Design System & Concepts**: Sep 28 – Oct 30, 2026
4. **Development (Astro & Craft CMS)**: Oct 19 – Dec 18, 2026
5. **Migration & Integration**: Nov 23 – Jan 15, 2027
6. **QA, Accessibility & Security**: Jan 4 – Feb 12, 2027
7. **Training & UAT**: Feb 1 – Feb 19, 2027
8. **Production Launch**: Feb 22 – Mar 1, 2027
9. **90-Day Warranty**: Mar 1 – May 31, 2027

### Budget Breakdown
| Item / Phase | Cost |
| :--- | :--- |
| **Discovery & Research** | $12,500 |
| **UX/IA & Design System** | $18,000 |
| **Astro & Craft CMS Engineering** | $41,000 |
| **Flight Feed & Search Integrations** | $11,500 |
| **Migration, Redirects & SEO** | $12,000 |
| **Accessibility, Performance & Security QA** | $9,000 |
| **Training, Documentation & Launch** | $9,500 |
| **TOTAL IMPLEMENTATION FEE** | **$113,500** |
| **Year 1 Managed Service & Hosting** | $8,400 |
| **YEAR 1 TOTAL** | **$121,900** |
| **Years 2–5 Base Support** | $9,600 / year |

---

*Full proposal submitted by Four Media Group LLC / FOURAK for NRAA RFP 2026-01.*
