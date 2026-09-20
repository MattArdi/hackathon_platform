const express = require("express");
const router = express.Router();

/*
 * Events
 * Fulfills RFQ clause(s): 1.a.ii, 1.e.iv, 1.e.vi
 * Briefing/outreach/milestone events; registration; recordings of past sessions.
 */

router.get("/hackathons/:hackathonId/events", (req, res) => res.status(501).json({ todo: "public: list briefing sessions + recordings" }));
router.post("/hackathons/:hackathonId/events/:id/register", (req, res) => res.status(501).json({ todo: "applicant: register (1.a.ii)" }));
router.post("/hackathons/:hackathonId/events", (req, res) => res.status(501).json({ todo: "ESG only: create event" }));
router.get("/hackathons/:hackathonId/events/:id/registrations", (req, res) => res.status(501).json({ todo: "ESG only: view registration list" }));

module.exports = router;
