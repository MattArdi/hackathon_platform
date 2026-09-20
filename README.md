# hackathon_platform

Transactional service with backend logic, built for the EnterpriseSG engagement.

## Structure

- `frontend/` — client application.
- `backend/` — API and business logic.
- `shared/` — types/utilities used by both `frontend` and `backend`.

No monorepo build tooling (Nx/Turborepo) yet — single frontend + single backend doesn't need it. Add it if a second app or package shows up.
