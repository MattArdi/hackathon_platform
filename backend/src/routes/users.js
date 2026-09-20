const express = require("express");
const router = express.Router();

/*
 * Users & Access
 * Fulfills RFQ clause(s): 1.b
 * The three-tier admin-rights model (public / demand driver / EnterpriseSG) as manageable role assignments.
 */

router.get("/", (req, res) => res.status(501).json({ todo: "ESG only: list back-office users + roles" }));
router.patch("/:id/role", (req, res) => res.status(501).json({ todo: "ESG only: change a user's role" }));

module.exports = router;
