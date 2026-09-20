# hackathon_platform

Transactional service with backend logic, built for the EnterpriseSG engagement.

## Structure

- `frontend/` - two apps: `client-facing` (public + applicant) and `back-office` (demand driver + EnterpriseSG roles). See "OI Challenge Platform - Page Architecture" doc for the full page list and the rationale behind the site/app split.
- `backend/` - API and business logic (Express route stubs, one module per resource).
- `shared/` - `styles/` (the EnterpriseSG-brand CSS library) and shared types/utilities used by both `frontend` and `backend`.

No monorepo build tooling (Nx/Turborepo) yet - two frontend apps + one backend doesn't need it. Add it if this grows further.

Page and route files under `frontend/` and `backend/src/routes/` are blueprints: structure and RFQ-clause traceability are real, implementations are stubs (`res.status(501)` / placeholder HTML).
