const express = require("express");
const router = express.Router();

/*
 * Demand Drivers
 * Fulfills RFQ clause(s): 1.b
 * ESG-only account management for demand-driver organizations.
 */

router.get("/", (req, res) => res.status(501).json({ todo: "ESG only: list demand drivers" }));
router.post("/", (req, res) => res.status(501).json({ todo: "ESG only: onboard demand driver account" }));
router.post("/:id/challenge-statements", (req, res) => res.status(501).json({ todo: "ESG only: assign a challenge statement to this DD" }));

module.exports = router;
