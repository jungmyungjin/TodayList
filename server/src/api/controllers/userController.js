const express = require("express");
const { userService } = require("../../services/index");
const { asyncHandler } = require("../../middlewares/index");

class UserController {
  // 모든 작업을 표시하는 메서드
  indexUser = asyncHandler(async (req, res) => {
    const allUser = await userService.getUsers();
    res.status(200).json(allUser);
  });

  showUser = asyncHandler(async (req, res) => {
    // 코드 내용
  });
  createUser = asyncHandler(async (req, res) => {
    // 코드 내용
  });

  updateUser = asyncHandler(async (req, res) => {
    // 코드 내용
  });

  deleteUser = asyncHandler(async (req, res) => {
    // 코드 내용
  });
}

module.exports = new UserController();
