const express = require("express");
const router = express.Router();

/*
 * Hackathons
 * Fulfills RFQ clause(s): 1.a, 1.c.ii, 1.g.i, 1.h.i
 * ESG-only writes (create/edit/publish/close, deadline + extension). Reads scoped by role: DD sees own hackathon(s), ESG sees all.
 */

router.get("/", (req, res) => res.status(501).json({ todo: "list hackathons, scoped by req.user role" }));
router.get("/:id", (req, res) => res.status(501).json({ todo: "hackathon detail" }));
router.post("/", (req, res) => res.status(501).json({ todo: "ESG only: create hackathon" }));
router.patch("/:id", (req, res) => res.status(501).json({ todo: "ESG only: edit hackathon, incl. deadline extension (1.c.ii)" }));
router.post("/:id/publish", (req, res) => res.status(501).json({ todo: "ESG only: publish/close" }));

module.exports = router;
