const express = require("express");
const router = express.Router();

const {
  getSummary,
  getCategoryTotals,
  getMonthlyTrends,
  getRecentActivity,
} = require("../controllers/dashboardController");

const { authenticate, authorizeRoles } = require("../middleware/authMiddleware");

// Protect all routes with authenticate first

router.get(
  "/summary",
  authenticate,
  authorizeRoles("admin", "analyst"),
  getSummary
);

router.get(
  "/categories",
  authenticate,
  authorizeRoles("admin", "analyst"),
  getCategoryTotals
);

router.get(
  "/trends",
  authenticate,
  authorizeRoles("admin", "analyst"),
  getMonthlyTrends
);

router.get(
  "/recent",
  authenticate,
  authorizeRoles("admin", "analyst"),
  getRecentActivity
);

module.exports = router;