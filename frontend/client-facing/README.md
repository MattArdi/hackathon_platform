# client-facing

Public + applicant-facing app. One reference build with every page visually built out (both the public and logged-in versions) for a fictional "Smart Logistics & Supply Chain Resilience" challenge with demand driver Meridian Logistics Pte Ltd, forked per hackathon in production - see "OI Challenge Platform - Page Architecture" doc, Section 3.

- `public/` - no login required (Home, Challenge Info, FAQs, Privacy & Data Retention Notice, Login).
- `applicant/` - requires login (My Dashboard, Messages, Account Settings).

Static HTML/CSS/JS, visual only - no backend wiring (framework-agnostic, matching `shared/styles`). Swap in a framework later without touching the page list or the CSS.
