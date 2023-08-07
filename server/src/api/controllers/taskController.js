const express = require("express");
const { getTasks, createTasks } = require("../services/taskService");
const { errorHandler } = require("../../middlewares/index");

class TaskController {
  indexTask = errorHandler(async (req, res) => {
    const allTask = await getTasks();
    res.status(200).json(allTask);
  });

  showTask = errorHandler(async (req, res) => {
    // 코드 내용
  });
  createTask = errorHandler(async (req, res) => {
    // 코드 내용
    const newTask = await createTasks(req, res);
    res.status(200).json(newTask);
  });

  updateTask = errorHandler(async (req, res) => {
    // 코드 내용
  });

  deleteTask = errorHandler(async (req, res) => {
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
