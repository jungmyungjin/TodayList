// src/models/index.js

const sequelize = require("../db/sequelize");

const User = require("./user");
const Task = require("./task");

Task.belongsTo(User, { as: "User", foreignKey: "user_email" });

sequelize
  .sync()
  .then(() => {
    console.log("------------------------------");
    console.log("💫 Database & tables created!");
    console.log("------------------------------");
  })
  .catch((error) => {
    console.error("Failed to create database & tables:", error);
  });

module.exports = { sequelize, User, Task };
