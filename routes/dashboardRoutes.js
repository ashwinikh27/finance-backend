const express = require("express");
const router = express.Router();

const { getSummary } = require("../controllers/dashboardController");
const { authorizeRoles } = require("../middleware/authMiddleware");

router.get("/summary", authorizeRoles("admin", "analyst"), getSummary);

module.exports = router;