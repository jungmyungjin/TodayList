// src/models/index.js

const sequelize = require("../db/sequelize");

const User = require("./user");
const Task = require("./task");

Task.belongsTo(User, { as: "User", foreignKey: "user_id" });
Task.belongsTo(Task, { as: "Parent", foreignKey: "parents_id" });
Task.hasMany(Task, { as: "Children", foreignKey: "parents_id" });

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
