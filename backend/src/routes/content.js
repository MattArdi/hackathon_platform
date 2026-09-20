const express = require("express");
const router = express.Router();

/*
 * Content
 * Fulfills RFQ clause(s): 1.e.i-viii, 1.d.iii
 * Powers the client-facing Challenge Info page and FAQs. The chatbot (1.d.iii) answers from this same FAQ content - no separate chatbot-content store.
 */

router.get("/hackathons/:hackathonId/content", (req, res) => res.status(501).json({ todo: "public: general info, timeline, rules, briefing sessions, FAQs, application details" }));
router.put("/hackathons/:hackathonId/content", (req, res) => res.status(501).json({ todo: "ESG only: edit" }));

module.exports = router;
