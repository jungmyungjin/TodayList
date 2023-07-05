const express = require("express");
const user = express.Router();
// import asyncHandler from "../middlewares/async-handler";
const { UserController } = require("../controllers/index");

user.get("/", UserController.indexUser);

user.post("/", (req, res) => {
  res.send("✨ hello! I'm TodayList ✨");
});

user.patch("/", (req, res) => {
  res.send("✨ hello! I'm TodayList ✨");
});

user.delete("/", (req, res) => {
  res.send("✨ hello! I'm TodayList ✨");
});

module.exports = user;
