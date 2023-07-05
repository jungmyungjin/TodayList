const { User } = require("../models/index");

const getUsers = async () => {
  try {
    const allUsers = await User.findAll();
    return allUsers;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUsers,
};
