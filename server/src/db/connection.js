const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: process.env.DB_ADDRESS,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  connectionLimit: 5,
});

const promisePool = pool.promise();

module.exports = promisePool;
