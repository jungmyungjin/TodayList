const express = require("express");
const hello = express.Router();

hello.get("/", (req, res) => {
  res.send("✨ hello! I'm TodayList ✨");
});

module.exports = hello;
