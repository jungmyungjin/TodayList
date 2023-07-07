const express = require("express");
const task = express.Router();
// const errorHandler = require("../../middlewares/async-handeler");
const { TaskController } = require("../controllers/index");

task.get("/", TaskController.indexTask);

task.post("/", (req, res) => {
  res.send("✨ hello! I'm TodayList ✨");
});

task.patch("/", (req, res) => {
  res.send("✨ hello! I'm TodayList ✨");
});

task.delete("/", (req, res) => {
  res.send("✨ hello! I'm TodayList ✨");
});

module.exports = task;
