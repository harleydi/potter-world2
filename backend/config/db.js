const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "kdf1234",
    host: "localhost",
    port: 5432,
    database: "potterworld"
});

module.exports = pool;