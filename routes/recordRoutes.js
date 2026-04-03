const express = require("express");
const router = express.Router();

const { createRecord, getRecords, updateRecord, deleteRecord } = require("../controllers/recordController");

const { authorizeRoles } = require("../middleware/authMiddleware");

// Only admin can create
router.post("/", authorizeRoles("admin"), createRecord);

// Admin + Analyst can view
router.get("/", authorizeRoles("admin", "analyst"), getRecords);

router.patch("/:id", authorizeRoles("admin"), updateRecord);
router.delete("/:id", authorizeRoles("admin"), deleteRecord);

module.exports = router;