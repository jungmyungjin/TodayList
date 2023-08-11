const { Task } = require("../../models/index");
const { InternalServerError } = require("../../errors");

const getTasks = async (req, res) => {
  try {
    const todoData = req?.userInfo;
    console.log("todoData?.user_id", todoData);
    const tasks = await Task.findAll({
      where: {
        user_id: todoData?.user_id,
      },
    });
    console.log("당신이 작성한 테스크는요..", tasks);
    res.status(200).json(tasks).end();
  } catch (error) {
    throw new InternalServerError({
      message: "Get tasks Error " + error.message,
      detail: error.message,
    });
  }
  res.status(200).end();
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
