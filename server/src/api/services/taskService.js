const { Task } = require("../../models/index");
const { InternalServerError } = require("../../errors");

const getTasks = async (req, res) => {
  try {
    let date = req.query.date;

    const todoData = req?.userInfo;
    const tasks = await Task.findAll({
      where: {
        date: date,
        user_email: todoData?.email,
      },
    });
    res.status(200).json(tasks).end();
  } catch (error) {
    throw new InternalServerError({
      message: "Get tasks Error " + error.message,
      detail: error.message,
    });
  }
  res.status(200).end();
};

const getParentsTasks = (tasks) => {
  const parentsTasks = tasks
    .filter((task) => task.parents_id === null)
    .map((task) => {
      delete task.id;
      return task;
    });
  return parentsTasks;
};

const mappingParentsTasks = (resultTaskParents, allTask) => {
  const mapId = resultTaskParents.reduce((result, task) => {
    result[task.updatedAt] = task.id;
    return result;
  }, {});

  const mappingParents = allTask
    .filter((task) => task.parents_id === null)
    .map((task) => {
      task.db_id = mapId[task.updatedAt];
      return task;
    });

  return mappingParents;
};

const matchChildTasks = (mappingTasks) => {
  const matchedChildtasks = mappingTasks
    .filter((task) => task.db_id)
    .map((task) => {
      delete task.id;
      task.parents_id = mappingTasks[task.db_id];
      delete task.db_id;
    });
  return matchedChildtasks;
};

const createTasks = async (req, res) => {
  const todoData = req.body;

  try {
    let date = req.query.date;
    // 기존 task 삭제
    await Task.destroy({
      where: {
        date: date,
        user_email: req.userInfo.email,
      },
    });
    // 새로운 task로 업데이트

    const resultTodoData = await Task.bulkCreate(todoData);

    res.status(201).json(resultTodoData);
  } catch (error) {
    throw new InternalServerError({
      message: "Create TodoList Error " + error.message,
      detail: error.message,
    });
  }
};

module.exports = { getTasks, createTasks };
