const { Task } = require("../models/index");

const getTasks = async () => {
  const tasks = await Task.findAll();
  return tasks;
};

const createTasks = async (req, res) => {
  const { user_id, content, status, order } = req.body;
  const newTask = await Task.create({
    user_id: user_id,
    content: content,
    status: status,
    order: order,
  });
  return newTask;
};

module.exports = {
  getTasks,
  createTasks,
};
