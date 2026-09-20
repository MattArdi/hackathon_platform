const express = require("express");
const router = express.Router();

/*
 * Challenge Statements
 * Fulfills RFQ clause(s): 1.a.i, 1.e.vii
 * Authored by the demand driver, published on the client-facing Challenge Info page.
 */

router.get("/hackathons/:hackathonId/challenge-statements", (req, res) => res.status(501).json({ todo: "list" }));
router.put("/hackathons/:hackathonId/challenge-statements/:id", (req, res) => res.status(501).json({ todo: "demand driver: edit own statement" }));

module.exports = router;
