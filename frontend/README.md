# frontend

Two apps, not one:

- `client-facing/` - public + applicant. Bespoke per hackathon in production; built here as one reference site with every page as a placeholder.
- `back-office/` - demand driver + EnterpriseSG. Split into separate `demand-driver/` and `esg/` page sets in this static demo so each role can show different content; see `back-office/README.md`.

Both talk to `backend/` over its API and use the shared brand CSS at `../shared/styles`.
