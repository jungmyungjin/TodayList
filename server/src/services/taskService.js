const { Task } = require("../models/index");

const getTasks = async () => {
  const tasks = await Task.findAll();
  return tasks;
};

module.exports = {
  getTasks,
};
