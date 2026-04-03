const express = require("express");
const router = express.Router();

const { createRecord, getRecords, updateRecord, deleteRecord } = require("../controllers/recordController");

const { authenticate, authorizeRoles } = require("../middleware/authMiddleware");

router.post("/", authenticate, authorizeRoles("admin"), createRecord);
router.get("/", authenticate, authorizeRoles("admin", "analyst"), getRecords);
router.patch("/:id", authenticate, authorizeRoles("admin"), updateRecord);
router.delete("/:id", authenticate, authorizeRoles("admin"), deleteRecord);

module.exports = router;