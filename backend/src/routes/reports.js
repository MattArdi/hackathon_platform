const express = require("express");
const router = express.Router();

/*
 * Reports
 * Fulfills RFQ clause(s): 1.g.i, 1.g.ii
 * Real-time stats power the My Hackathons dashboard section (1.g.i, preferred). The weekly export (1.g.ii, required regardless) is a scheduled snapshot of the same underlying data, not a second system.
 */

router.get("/hackathons/:hackathonId/stats", (req, res) => res.status(501).json({ todo: "real-time submission stats, scoped by role (1.g.i)" }));
router.get("/hackathons/:hackathonId/weekly-export", (req, res) => res.status(501).json({ todo: "weekly progress report export (1.g.ii)" }));

module.exports = router;
