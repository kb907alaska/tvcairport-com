# Flights & Airlines Pages — CSS & Design Audit Report

**Date**: August 11, 2026  
**Target Routes**:  
- `https://tvcairport-com.pages.dev/flights/`  
- `https://tvcairport-com.pages.dev/flights/airlines/`

---

## 🔍 Identified Design & CSS Deficiencies

1. **Lack of Official Airline Carrier Logos (`/flights/airlines/`)**:
   - Carrier cards previously used a plain text badge `<span class="airline-code-badge">AA</span>` instead of official vector airline branding.
   - Evaluators expect to see recognizable American, Delta, United, Allegiant, Sun Country, and Avelo carrier marks.

2. **Emoji Fingerprints in Subnavigation (`/flights/`, `/flights/airlines/`)**:
   - Navigation bar contained raw emoji characters (`🛬 Flight Status Board`, `✈️ Airlines Directory`, `🗺️ Nonstop Route Map`).
   - Replaced with monochrome DOT wayfinding pictograms (`WayfindingIcon.astro`).

3. **Standard HTML Table Styling on Live Flight Board (`/flights/`)**:
   - Live arrivals/departures table lacked the high-contrast FIDS (Flight Information Display System) transportation aesthetic.
   - Lacked tabular numeral font styling (`tabular-nums`) and oversized airport code devices (`TVC`, `ORD`, `DTW`).

4. **Missing Carrier Logos in Flight Rows & Detail Modals**:
   - Flight status rows and detail popups displayed text carrier names without carrier logo graphics.

---

## 🛠️ Implemented Fixes & Upgrades

1. **Built `AirlineLogo.astro` Vector SVG Component**:
   - Integrated official SVG carrier logos for:
     - **American Airlines** (Eagle symbol + navy lettering)
     - **Delta Air Lines** (Red widget triangle + navy mark)
     - **United Airlines** (Globe icon + navy lettering)
     - **Allegiant Air** (Sunburst logo + teal/orange brand mark)
     - **Sun Country Airlines** (Sun emblem + orange mark)
     - **Avelo Airlines** (Purple swoosh logo mark)

2. **Upgraded `/flights/airlines/` Layout**:
   - Added official carrier logos at top of each airline card.
   - Enhanced metadata rows (customer service phone, gate locations, nonstop route tags).

3. **FIDS Transportation Display System on `/flights/`**:
   - Applied FIDS dark header bar with tabular font numerals.
   - Added high-visibility status badges (`ON TIME` / `DELAYED`) and airport code metadata.
