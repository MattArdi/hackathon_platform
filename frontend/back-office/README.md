# back-office

One app, two roles: demand driver and EnterpriseSG (super-user) — see "OI Challenge Platform — Page Architecture" doc, Section 5, for why these were merged from two separately-planned sites into one role-scoped app.

- `shared/` — pages both roles see (My Hackathons, Proposals, Evaluation, Messages, Notifications, Account Settings). Scope of the data shown, not the page itself, differs by role.
- `esg-only/` — pages only the EnterpriseSG role can reach (Hackathon Management, Demand Driver Management, User & Access Management, Content Management, Events Management).

Role enforcement happens server-side (`backend/src/middleware/requireRole.js`), not just by hiding nav links.
