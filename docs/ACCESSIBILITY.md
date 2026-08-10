# TVC Website WCAG 2.2 AA Accessibility Specification

**Contract Standard**: Section 508 & WCAG 2.2 Level AA Compliance  
**Scope**: All public templates, interactive components, forms, document portals, and mobile views.  

---

## 1. Accessibility Core Rules

1. **Semantic HTML Structure**: Single `<h1>` per page, logical heading hierarchy (`h1` -> `h2` -> `h3`), semantic `<main>`, `<nav>`, `<header>`, `<footer>`, `<aside>`, and `<article>` elements.
2. **Keyboard Navigation & Focus Control**: Visible focus indicator rings (`3px solid var(--color-teal)`), skip navigation link (`Skip to main airport content`), logical tab order, and modal focus traps.
3. **Color Contrast Ratios**: Text elements meet minimum 4.5:1 contrast ratio against backgrounds. Large text (18pt+) meets 3:1 ratio.
4. **Screen Reader Compatibility**: ARIA live regions for flight updates (`aria-live="polite"`), explicit form label associations, `aria-expanded` states on accordions, and `aria-hidden="true"` on decorative icons.
5. **PDF & Document Accessibility**: Machine-readable text tags, alt-text on document figures, and clear download link metadata.

---

## 2. Testing Protocol

- **Automated Scans**: Axe-core, Pa11y, and Lighthouse Accessibility audits targeting 100/100 score.
- **Manual Keyboard Audit**: Complete keyboard navigation without mouse usage.
- **Screen Reader Testing**: VoiceOver (macOS/iOS) and NVDA/JAWS (Windows) walkthrough of key passenger journeys:
  - Checking flight arrivals
  - Estimating parking rates
  - Searching public board documents
  - Submitting job application form
