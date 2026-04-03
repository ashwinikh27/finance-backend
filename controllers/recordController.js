const Record = require("../models/Record");

// Create Record
exports.createRecord = async (req, res) => {
  try {
    const { amount, type, category } = req.body;
    const userId = req.headers.userid;

    if (!amount || !type || !category || !userId) {
      return res.status(400).json({
        message: "Amount, type, category and userId are required",
      });
    }

    const record = await Record.create({
      ...req.body,
      user: userId,
    });

    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Records (with filters)
exports.getRecords = async (req, res) => {
  try {
    const userId = req.headers.userid;

    let filter = { user: userId };

    const records = await Record.find(filter);

    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Record
exports.updateRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Record
exports.deleteRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndDelete(req.params.id);

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};