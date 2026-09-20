# client-facing

Public + applicant-facing app. One reference build carrying every page as a placeholder (including both the public and logged-in versions), forked per hackathon in production — see "OI Challenge Platform — Page Architecture" doc, Section 3.

- `public/` — no login required (Home, Challenge Info, FAQs, Privacy & Data Retention Notice, Login).
- `applicant/` — requires login (My Dashboard, Messages, Account Settings).

Static HTML blueprint for now (framework-agnostic, matching `shared/styles`). Swap in a framework later without touching the page list or the CSS.
