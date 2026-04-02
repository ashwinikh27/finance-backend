const express = require("express");
const router = express.Router();

const { getSummary, getCategoryTotals,
  getMonthlyTrends} = require("../controllers/dashboardController");
const { authorizeRoles } = require("../middleware/authMiddleware");

router.get("/summary", authorizeRoles("admin", "analyst"), getSummary);

router.get("/categories", authorizeRoles("admin", "analyst"), getCategoryTotals);
router.get("/trends", authorizeRoles("admin", "analyst"), getMonthlyTrends);

module.exports = router;