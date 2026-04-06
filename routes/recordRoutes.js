const express = require("express");
const router = express.Router();

const { createRecord, getRecords, updateRecord, deleteRecord } = require("../controllers/recordController");

const { authenticate, authorizeRoles } = require("../middleware/authMiddleware");

// CREATE → only admin
router.post("/", authenticate, authorizeRoles("admin"), createRecord);

// READ → admin + analyst + viewer
router.get("/", authenticate, authorizeRoles("admin", "analyst", "viewer"), getRecords);

// UPDATE → only admin
router.patch("/:id", authenticate, authorizeRoles("admin"), updateRecord);

// DELETE → only admin
router.delete("/:id", authenticate, authorizeRoles("admin"), deleteRecord);

module.exports = router;