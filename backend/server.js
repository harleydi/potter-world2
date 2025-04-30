require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { connectDB } = require("./config/db")

connectDB()

const app = express()
const PORT = process.env.PORT || 8000

// Middleware
app.use(cors({
    credentials: true
}))
app.use(express.json())


app.get("/", (req, res) => {
    res.json({
        message: "Potter World API"
    })
})


// Routes
app.use("/auth", require("./routes/jwtAuth"))
app.use("/users", require("./routes/users"))


app.use((err, req, res, next) => {
    console.error("Server Error:", err.stack);
    res.status(500).json({
      status: "error",
      message: err.message || "Internal Server Error",
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  });

// Listen for port
app.listen(PORT, () => {
    console.log("Server is starting on port " + PORT)
})