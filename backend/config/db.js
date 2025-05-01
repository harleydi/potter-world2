require("dotenv").config();
const { Pool } = require("pg");

// const pool = new Pool({
//     user: "postgres",
//     password: "kdf1234",
//     host: "localhost",
//     port: 5432,
//     database: "potterworld"
// });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false
});

pool.query('SELECT NOW()', (err) => {
    if (err) {
      console.error('Database connection error', err.stack);
    } else {
      console.log('Database connected successfully');
    }
  });

module.exports = pool;
