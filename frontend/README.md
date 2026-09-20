# frontend

Two apps, not one:

- `client-facing/` — public + applicant. Bespoke per hackathon in production; built here as one reference site with every page as a placeholder.
- `back-office/` — demand driver + EnterpriseSG, merged into a single role-scoped app (see the architecture doc, Section 5).

Both talk to `backend/` over its API and use the shared brand CSS at `../shared/styles`.
