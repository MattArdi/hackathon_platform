const express = require("express");
const router = express.Router();

/*
 * Auth
 * Fulfills RFQ clause(s): 1.b
 * Two identity pools: applicant self-registration (client-facing app) vs. provisioned demand-driver/EnterpriseSG accounts (back-office app). Role is what the three-tier admin-rights model (1.b) is enforced against.
 */

router.post("/register", (req, res) => res.status(501).json({ todo: "applicant self-registration" }));
router.post("/login", (req, res) => res.status(501).json({ todo: "login, returns role-scoped session/token" }));
router.post("/logout", (req, res) => res.status(501).json({ todo: "logout" }));

module.exports = router;
