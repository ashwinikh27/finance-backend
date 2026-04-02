const express = require("express");
const router = express.Router();

const { createRecord, getRecords } = require("../controllers/recordController");

router.post("/", createRecord);
router.get("/", getRecords);

module.exports = router;