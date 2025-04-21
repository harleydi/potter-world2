require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 8000

// Middleware
app.use(cors())
app.use(express.json())


// Routes
app.use("/auth", require("./routes/jwtAuth"))


// Listen for port
app.listen(PORT, () => {
    console.log("Server is starting on port " + PORT)
})