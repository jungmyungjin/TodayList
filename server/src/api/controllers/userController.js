const express = require("express");
const { userService } = require("../../services/index");
const { errorHandler } = require("../../middlewares/index");

class UserController {
  // 모든 작업을 표시하는 메서드
  indexUser = errorHandler(async (req, res) => {
    const allUser = await userService.getUsers();
    res.status(200).json(allUser);
  });

  showUser = errorHandler(async (req, res) => {
    // 코드 내용
  });
  createUser = errorHandler(async (req, res) => {
    // 코드 내용
    const createUser = await userService.createUser(req, res);
    res.status(201).json(createUser);
  });

  updateUser = errorHandler(async (req, res) => {
    // 코드 내용
  });

  deleteUser = errorHandler(async (req, res) => {
    // 코드 내용
  });
}

module.exports = new UserController();
