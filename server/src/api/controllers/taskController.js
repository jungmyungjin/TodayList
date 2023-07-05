const express = require("express");
const { taskService } = require("../../services/index");
const { asyncHandler } = require("../../middlewares/index");

class TaskController {
  indexTask = asyncHandler(async (req, res) => {
    const allTask = await taskService.getTasks();
    res.status(200).json(allTask);
  });

  showTask = asyncHandler(async (req, res) => {
    // 코드 내용
  });
  createTask = asyncHandler(async (req, res) => {
    // 코드 내용
  });

  updateTask = asyncHandler(async (req, res) => {
    // 코드 내용
  });

  deleteTask = asyncHandler(async (req, res) => {
    // 코드 내용
  });

  // **
  // task 작업단위가 소규모 인 경우
  //
  // // 작업을 완료 상태로 업데이트하는 메서드
  // async markCompleteTask(req, res) {
  //   // 코드 내용
  // }
  // // 작업을 보류 상태로 업데이트하는 메서드
  // async markPendingTask(req, res) {
  //   // 코드 내용
  // }
}

module.exports = new TaskController();
