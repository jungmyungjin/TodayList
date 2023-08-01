const express = require("express");
const {
  loginUser,
  getUsers,
  createUser,
  getUserInfo,
} = require("../../services/userService");
const { errorHandler } = require("../../middlewares/index");

class UserController {
  login = errorHandler(async (req, res) => {
    const jwt = await loginUser(req, res);
    res.cookie("access_token", jwt, {
      httpOnly: true,
    });
    res.status(200).json({ token: jwt });
    res.end();
  });

  logout = errorHandler(async (req, res) => {
    // 코드 내용
    res.clearCookie("access_token").status(205).end();
  });

  // 모든 작업을 표시하는 메서드
  indexUser = errorHandler(async (req, res) => {
    const allUser = await getUsers();
    res.status(200).json(allUser);
  });

  showUser = errorHandler(async (req, res) => {
    const userInfo = await getUserInfo(req, res);
    if (!userInfo) {
      return res.status(204).send();
    }
    return res.status(200).json(userInfo).end();
  });

  signUp = errorHandler(async (req, res) => {
    // 코드 내용
    const createdUser = await createUser(req, res);
    res.status(201).json(createdUser);
  });

  updateUser = errorHandler(async (req, res) => {
    // 코드 내용
  });

  deleteUser = errorHandler(async (req, res) => {
    // 코드 내용
  });
}

module.exports = new UserController();
