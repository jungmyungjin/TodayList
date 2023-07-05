const { Task } = require("../models/index");

const getTasks = async () => {
  try {
    const tasks = await Task.findAll();
    return tasks;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTasks,
};
