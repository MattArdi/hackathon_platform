# backend

API and business logic (Node/Express blueprint). One route module per resource under `src/routes/`, each commented with the RFQ clause(s) it fulfills. `src/middleware/requireRole.js` is where the RFQ's 1.b admin-rights model (public / demand driver / EnterpriseSG) actually gets enforced - the `frontend/back-office` app being one role-scoped app instead of two depends on this middleware, not on anything in the frontend.

Run: `npm install && npm start` (stubs only - every handler currently returns 501).
