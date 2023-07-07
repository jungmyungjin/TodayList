const express = require("express");
const {
  loginUser,
  getUsers,
  createUser,
} = require("../../services/userService");
const { errorHandler } = require("../../middlewares/index");

class UserController {
  login = errorHandler(async (req, res) => {
    const jwt = await loginUser(req, res);
    res.cookie("token", jwt, { httpOnly: true });
    res.status(200).json(jwt);
  });

  // 모든 작업을 표시하는 메서드
  indexUser = errorHandler(async (req, res) => {
    const allUser = await getUsers();
    res.status(200).json(allUser);
  });

  showUser = errorHandler(async (req, res) => {
    // 코드 내용
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
