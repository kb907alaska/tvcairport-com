# TVC Craft CMS Content Model & Schema Specification

**Project**: Cherry Capital Airport (TVC) — Next-Gen Digital Platform  
**System Architecture**: Decoupled Craft CMS + Astro 5.2 Frontend  

---

## 1. Content Matrix Overview

Craft CMS provides structured content entry, matrix block fields, granular user permissions, and GraphQL endpoints to power the public Astro site.

### Content Types

#### 1. Flight Operational Feed Schema (`Flight`)
- `flightNumber`: String (e.g. `DL1422`)
- `airline`: Entries (`Delta`, `American`, `United`, `Allegiant`, `Sun Country`)
- `type`: Dropdown (`arrival`, `departure`)
- `originCity`: String
- `destinationCity`: String
- `scheduledTime`: DateTime
- `estimatedTime`: DateTime
- `gate`: String
- `status`: Dropdown (`On Time`, `Delayed`, `Boarding`, `Cancelled`, `Landed`)
- `lastUpdated`: Timestamp

#### 2. Parking Lot Schema (`ParkingLot`)
- `title`: String (`Short Term`, `Long Term`, `Economy`, `Covered Drop-off`)
- `rateHourly`: Number
- `rateDailyMax`: Number
- `walkingTime`: String (e.g., `1–2 mins`)
- `totalSpaces`: Number
- `accessibleSpaces`: Number
- `evChargingAvailable`: Boolean
- `description`: Redactor / Plain Text

#### 3. Public Document & Meeting Schema (`BoardDocument`)
- `title`: String
- `category`: Category (`Financial`, `Governance`, `Operations`, `Bids`, `Environmental`)
- `fiscalYear`: Number (e.g., `2026`)
- `documentFile`: Asset (PDF/DOCX)
- `meeting`: Entry Relation (`BoardMeeting`)
- `isProtectedBoardVault`: Boolean
- `downloadCount`: Number (GA4 event tracked)

#### 4. Airport Alert & Advisory Schema (`AirportAlert`)
- `title`: String
- `severity`: Dropdown (`Information`, `Travel Advisory`, `Weather`, `Emergency`)
- `shortMessage`: Text
- `body`: RichText
- `startDate`: DateTime
- `endDate`: DateTime
- `sitewide`: Boolean
- `dismissible`: Boolean

---

## 2. Craft CMS GraphQL Endpoint Strategy

Craft CMS exposes GraphQL queries consumed by Astro at build time (for static pre-rendering) and on-demand via server endpoints:

```graphql
query GetBoardMeetings {
  entries(section: "boardMeetings", orderBy: "date desc") {
    id
    title
    date
    agendaPdf { url }
    packetPdf { url }
    minutesPdf { url }
  }
}
```
