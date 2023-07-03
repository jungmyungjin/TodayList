// src/db/sequelize.js

const Sequelize = require("sequelize");

// Sequelize를 통한 MariaDB 연결부
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: process.env.DB_ADDRESS,
    dialect: "mariadb",
  }
);

module.exports = sequelize;
