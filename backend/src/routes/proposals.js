const express = require("express");
const router = express.Router();

/*
 * Proposals
 * Fulfills RFQ clause(s): 1.a.iii, 1.b.i, 1.b.ii, 1.c.i, 1.c.ii, 1.c.iii
 * Draft save + submit (applicant). Read access restricted to the owning demand driver's own challenge statement, or EnterpriseSG (1.b.i, 1.b.ii). Retention job (1.c.iii) deletes proposals + applicant data 1 year after each hackathon's submission deadline.
 */

router.get("/mine", (req, res) => res.status(501).json({ todo: "applicant: my draft + submitted proposals" }));
router.put("/mine/draft", (req, res) => res.status(501).json({ todo: "applicant: save draft (1.c.i)" }));
router.post("/mine/submit", (req, res) => res.status(501).json({ todo: "applicant: submit; reject if past deadline (1.c.ii)" }));
router.get("/", (req, res) => res.status(501).json({ todo: "DD/ESG: list, scoped by role (1.b.i, 1.b.ii)" }));
router.get("/:id", (req, res) => res.status(501).json({ todo: "DD/ESG: proposal detail + documents" }));
// Retention: a scheduled job (not an HTTP route) purges proposals + applicant data
// 1 year after each hackathon's submission deadline, per 1.c.iii.

module.exports = router;
