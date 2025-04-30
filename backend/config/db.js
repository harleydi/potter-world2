require("dotenv").config()
const { Client } = require("pg")

// const pool = new Pool({
//     user: "postgres",
//     password: "kdf1234",
//     host: "localhost",
//     port: 5432,
//     database: "potterworld"
// });

const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    })


const connectDB = async () => {
    try {
        await client.connect()
        console.log("Database Connected")
    } catch (error) {
        console.error("Database Connection Error", error)
        process.exit(1)
    }
}

module.exports = { client, connectDB };