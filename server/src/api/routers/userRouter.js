const express = require("express");
const user = express.Router();
const { validationPassword } = require("../../middlewares/index");
const { UserController } = require("../controllers/index");

user.get("/", UserController.indexUser);

user.post("/", validationPassword, UserController.createUser);

user.patch("/", (req, res) => {
  res.send("✨ hello! I'm TodayList ✨");
});

user.delete("/", (req, res) => {
  res.send("✨ hello! I'm TodayList ✨");
});

module.exports = user;
