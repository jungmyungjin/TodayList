const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: process.env.TODAY_LIST_DB_HOST,
  database: process.env.TODAY_LIST_DB_NAME,
  user: process.env.TODAY_LIST_DB_USER,
  password: process.env.TODAY_LIST_DB_PASSWORD,
  connectionLimit: 5,
});

const promisePool = pool.promise();

module.exports = promisePool;
