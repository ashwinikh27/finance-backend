const express = require("express");
const router = express.Router();

const { createRecord, getRecords } = require("../controllers/recordController");

const { authorizeRoles } = require("../middleware/authMiddleware");

// Only admin can create
router.post("/", authorizeRoles("admin"), createRecord);

// Admin + Analyst can view
router.get("/", authorizeRoles("admin", "analyst"), getRecords);

module.exports = router;