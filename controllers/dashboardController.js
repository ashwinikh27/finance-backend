const Record = require("../models/Record");

// 📊 SUMMARY
exports.getSummary = async (req, res) => {
  try {
    const records = await Record.find({ user: req.user.id }); // ✅ FIXED

    let totalIncome = 0;
    let totalExpense = 0;

    records.forEach((record) => {
      if (record.type === "income") {
        totalIncome += record.amount;
      } else {
        totalExpense += record.amount;
      }
    });

    const netBalance = totalIncome - totalExpense;

    res.status(200).json({
      totalIncome,
      totalExpense,
      netBalance,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📊 CATEGORY TOTALS
exports.getCategoryTotals = async (req, res) => {
  try {
    const result = await Record.aggregate([
      {
        $match: { user: req.user.id }, // ✅ FIXED
      },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
    ]);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📊 MONTHLY TRENDS
exports.getMonthlyTrends = async (req, res) => {
  try {
    const result = await Record.aggregate([
      {
        $match: { user: req.user.id }, // ✅ FIXED
      },
      {
        $group: {
          _id: { month: { $month: "$date" } },
          total: { $sum: "$amount" },
        },
      },
      { $sort: { "_id.month": 1 } },
    ]);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📊 RECENT ACTIVITY (already correct)
exports.getRecentActivity = async (req, res) => {
  try {
    const records = await Record.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};