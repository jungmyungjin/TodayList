const { Task } = require("../../models/index");
const { InternalServerError } = require("../../errors");

const getTasks = async () => {
  const tasks = await Task.findAll();
  return tasks;
};

const createTasks = async (req, res) => {
  const todoData = req.body;

  try {
    // 기존 task 삭제
    await Task.destroy({
      where: {
        user_id: req.userInfo.user_id,
      },
    });
    // 새로운 task로 업데이트
    const createdUsers = await Task.bulkCreate(todoData);

    res.status(201).json(createdUsers);
  } catch (error) {
    throw new InternalServerError({
      message: "Create TodoList Error " + error.message,
      detail: error.message,
    });
  }
};

module.exports = { getTasks, createTasks };
