// src/db/sequelize.js

const Sequelize = require("sequelize");

// Sequelize를 통한 MariaDB 연결부
const sequelize = new Sequelize(
  process.env.TODAY_LIST_DB_NAME,
  process.env.TODAY_LIST_DB_USER,
  process.env.TODAY_LIST_DB_PASSWORD,
  {
    host: process.env.TODAY_LIST_DB_HOST,
    dialect: "mariadb",
  }
);

module.exports = sequelize;
