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