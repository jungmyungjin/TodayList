const express = require("express");
const user = express.Router();
const { validationPassword, verifyToken } = require("../../middlewares/index");
const { UserController } = require("../controllers/index");

// 로그인
user.post("/signIn", UserController.login);

// 회원가입
user.post("/signUp", validationPassword, (req, res) => {
  UserController.signUp(req, res);
});

// 사용자 조회
user.get("/user", verifyToken, UserController.showUser);

// 전체 사용자 조회
user.get("/users", UserController.indexUser);

user.patch("/", (req, res) => {
  res.send("✨ hello! I'm TodayList ✨");
});

user.delete("/", (req, res) => {
  res.send("✨ hello! I'm TodayList ✨");
});

module.exports = user;
