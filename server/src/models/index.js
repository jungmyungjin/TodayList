// src/models/index.js

const sequelize = require("../db/sequelize");

const User = require("./user");
const Task = require("./task");

Task.belongsTo(User, { as: "User", foreignKey: "user_email" });

const MAX_RETRIES = 5;
const RETRY_DELAY = 5000; // 5 seconds

const connectWithRetry = async (retries = 0) => {
  if (retries > MAX_RETRIES) {
    console.error("Max retries reached. Exiting...");
    process.exit(1);
  }

  try {
    await sequelize.sync();
    console.log("------------------------------");
    console.log("💫 Database & tables created!");
    console.log("------------------------------");
  } catch (error) {
    console.error(
      `Failed to create database & tables. Retry attempt: ${retries + 1}`
    );
    setTimeout(() => connectWithRetry(retries + 1), RETRY_DELAY);
  }
};

connectWithRetry();

module.exports = { User, Task };
