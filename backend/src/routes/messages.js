const express = require("express");
const router = express.Router();

/*
 * Messages
 * Fulfills RFQ clause(s): 1.d.ii
 * One shared messaging service with per-app inboxes: applicant<->DD/Contractor/ESG, DD<->Contractor/ESG, ESG<->anyone. Optional feature per 1.d.v.
 */

router.get("/threads", (req, res) => res.status(501).json({ todo: "list threads for req.user, scoped by role" }));
router.post("/threads/:id/messages", (req, res) => res.status(501).json({ todo: "send message" }));

module.exports = router;
