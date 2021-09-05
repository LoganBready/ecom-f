const Pool = require("pg").Pool;
require("dotenv").config();
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ecomdb",
  password: process.env.DB_PASS,
  port: 5432,
});

module.exports = pool;
