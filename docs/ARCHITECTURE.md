# TVC System Architecture & Technical Topology

**Architecture Pattern**: Decoupled Headless CMS + Static Edge Delivery  
**Frontend Framework**: Astro 5.2 (TypeScript, CSS Modules)  
**Content Management**: Craft CMS 4.x / 5.x (AWS US East - Ohio)  
**Edge CDN & Security**: Cloudflare Pages / Cloudflare Enterprise (DNS, WAF, DDoS)  

---

## 1. System Topology Diagram

```text
                            PUBLIC PASSENGERS
                                    │
                                    ▼
                          CLOUDFLARE EDGE LAYER
                     CDN · WAF · DDoS · SSL/TLS
                                    │
                                    ▼
                         ASTRO 5.2 FRONTEND
                     (https://tvcairport-com.pages.dev)
                       │                    │
                       ▼                    ▼
                CRAFT CMS API         FLIGHT FEED API
             (cms.tvcairport.com)    (FlightView / OAG)
                       │
                       ▼
             PostgreSQL / MySQL DB
```

---

## 2. Technical Decisions & Benefits

1. **Static Pre-Rendering (SSG)**: Astro pre-renders 95%+ of public pages into static HTML/CSS at edge nodes. Page load speed is < 200ms globally with zero database query latency.
2. **Resilience During CMS Maintenance**: If Craft CMS undergoes administrative updates, the public website remains 100% available via Cloudflare edge cache with zero downtime.
3. **Security Perimeter**: Decoupling prevents public web traffic from reaching PHP application code or MySQL databases directly, neutralizing SQL injection and WordPress-style vulnerability vectors.
4. **Source Code & Data Ownership**: NRAA retains 100% ownership of the GitHub code repository, Craft CMS schema exports, and database backups with zero vendor lock-in.
