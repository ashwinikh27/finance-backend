require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
connectDB();

// Middleware to parse JSON
app.use(express.json());
app.use("/api/users", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Finance Backend API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});