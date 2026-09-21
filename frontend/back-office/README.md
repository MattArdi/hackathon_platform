# back-office

Two roles, split into two real page sets for this demo build (rather than one shared role-scoped app) so each role's screens can show genuinely different content:

- `login.html` - shared entry point (role not known yet); stacked buttons hand off to either folder below.
- `demand-driver/` - a demand driver's own workspace: one merged "control" page (hackathon list + detail + proposals, in place of separate My Hackathons/Proposals/Evaluation pages - Evaluation is dropped for this role for now), Notifications, Account.
- `esg/` - EnterpriseSG's workspace: My Hackathons, Proposals, Evaluation, Notifications, Account, plus the admin-only pages (Hackathon Management, Demand Driver Management, User & Access Management, Content Management, Events Management).

Note: this reverses the single-role-scoped-app recommendation in the "OI Challenge Platform - Page Architecture" doc's Section 5. That recommendation still holds for the real build (one data model, server-side role scoping via `backend/src/middleware/requireRole.js`); this static demo splits the files instead because there's no backend behind it to scope a shared page by role at request time.
