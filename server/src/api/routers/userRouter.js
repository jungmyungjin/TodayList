const express = require("express");
const user = express.Router();
const { validationPassword, verifyToken } = require("../../middlewares/index");
const {
  UserController,
  LoginController,
  AuthController,
} = require("../controllers/index");

// 로그인
user.post("/login", LoginController.login);
user.get("/kakao", (req, res) => {
  LoginController.loginKakao(req, res);
});
// 로그아웃
user.delete("/logout", AuthController.logout);

// 회원가입
user.post("/join", (req, res) => {
  UserController.join(req, res);
});

// 사용자 조회
user.get("/user", verifyToken, UserController.showUser);

// 전체 사용자 조회
user.get("/users", UserController.indexUser);

// TODO : 사용자 정보 수정
// user.patch("/", (req, res) => {
//   res.send("✨ hello! I'm TodayList ✨");
// });

// TODO : 사용자 정보 삭제
// user.delete("/", (req, res) => {
//   res.send("✨ hello! I'm TodayList ✨");
// });

module.exports = user;
