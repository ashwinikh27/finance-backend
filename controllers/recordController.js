const Record = require("../models/Record");

// Create Record
exports.createRecord = async (req, res) => {
  try {
    const { amount, type, category } = req.body;

    // Basic validation
    if (!amount || !type || !category) {
      return res.status(400).json({
        message: "Amount, type and category are required",
      });
    }

    if (!["income", "expense"].includes(type)) {
      return res.status(400).json({
        message: "Type must be income or expense",
      });
    }

    const record = await Record.create(req.body);

    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Records (with filters)
exports.getRecords = async (req, res) => {
  try {
    const { type, category, startDate, endDate } = req.query;

    let filter = {};

    if (type) filter.type = type;
    if (category) filter.category = category;

    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const records = await Record.find(filter);
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};