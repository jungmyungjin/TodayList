const express = require("express");
const healthCheck = express.Router();

healthCheck.get("/", (req, res) => {
  res.send("✨ hello! I'm TodayList ✨");
});

module.exports = healthCheck;
