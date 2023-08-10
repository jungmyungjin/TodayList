const express = require("express");
const {
  getUsers,
  createUser,
  getUserInfo,
  loginUser,
} = require("../services/userService");
const { generateAccessToken } = require("../services/authService");

const { errorHandler } = require("../../middlewares/index");

class UserController {
  // 로그아웃
  logout = errorHandler(async (req, res) => {
    // 코드 내용
    res
      .clearCookie("access_token", {
        path: "/",
        domain: process.env.TODAY_LIST_DOMAIN,
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .status(204)
      .end();
  });

  // 전체 사용자 조회
  indexUser = errorHandler(async (req, res) => {
    const allUser = await getUsers();
    res.status(200).json(allUser);
  });

  // 현재 사용자 조회
  showUser = errorHandler(async (req, res) => {
    const token = req?.cookies?.access_token || "";
    const userInfo = await getUserInfo(token);
    if (!userInfo) {
      return res.status(204).send();
    }
    return res.status(200).json(userInfo?.data).end();
  });

  // 회원 가입
  join = errorHandler(async (req, res) => {
    // 코드 내용
    const { email, full_name, password } = req.body;
    const createdUser = await createUser({
      email,
      full_name,
      password,
    });
    const jwt = await generateAccessToken({
      email: email,
      full_name: full_name,
    });
    res.cookie("access_token", jwt, {
      path: "/",
      domain: process.env.TODAY_LIST_DOMAIN,
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    return res.status(201).json(createdUser).end();
  });

  updateUser = errorHandler(async (req, res) => {
    // 코드 내용
  });

  deleteUser = errorHandler(async (req, res) => {
    // 코드 내용
  });
}

module.exports = new UserController();
