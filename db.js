const { Pool } = require("pg");
const connectionString = process.env.CONNECTIONSTRING;

const pool = new Pool({
  connectionString,
});

module.exports = pool;
