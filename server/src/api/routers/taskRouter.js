const express = require("express");
const task = express.Router();
// const errorHandler = require("../../middlewares/async-handeler");
const { verifyToken } = require("../../middlewares/index");
const { TaskController } = require("../controllers/index");

task.get("/", TaskController.indexTask);

task.post("/", verifyToken, TaskController.createTask);

task.patch("/", (req, res) => {
  res.send("✨ hello! I'm TodayList ✨");
});

task.delete("/", (req, res) => {
  res.send("✨ hello! I'm TodayList ✨");
});

module.exports = task;
