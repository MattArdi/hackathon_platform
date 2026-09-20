/*
 * Role-scoping middleware stub. Every route above should check req.user.role
 * against one of "applicant" | "demand_driver" | "esg" - this is the actual
 * implementation of the RFQ's 1.b admin-rights model (public/demand-driver/
 * EnterpriseSG), applied as application logic rather than as separate apps.
 */
function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: "forbidden" });
    }
    next();
  };
}

module.exports = { requireRole };
