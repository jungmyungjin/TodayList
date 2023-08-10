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
    retry: {
      match: [
        /ETIMEDOUT/,
        /EHOSTUNREACH/,
        /ECONNRESET/,
        /ECONNREFUSED/,
        /ESOCKETTIMEDOUT/,
        /EAI_AGAIN/,
      ],
      max: 5, // 재시도 횟수 설정
      timeout: 60000, // 1분
    },
  }
);

module.exports = sequelize;
