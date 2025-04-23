// controllers/authController.js
const pool = require("../config/db");
const bcrypt = require("bcryptjs");
const jwtGenerator = require("../utils/jwtGenerator");

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user exists
    const userExist = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (userExist.rowCount !== 0) {
      return res.status(400).json({
        status: "error",
        message: "Email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const newUser = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, hashedPassword]
    );

    // Generate JWT
    const token = jwtGenerator(newUser.rows[0].user_id);

    res.status(201).json({
      status: "success",
      token,
      user: newUser.rows[0],
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      status: "error",
      message: "Server error",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    )

    if (user.rows.length === 0) {
        return res.status(400).json({
            status: "error",
            message: "Invalid credentials"
        })
    }

    const checkPassword = await bcrypt.compare(password, user.rows[0].password)

    if (!checkPassword) {
        return res.status(400).json({
            status: "error",
            message: "Invalid credentials"
        })
    }

    const token = jwtGenerator(user.rows[0].user_id)

    const userData = { ...user.rows[0] }
    delete userData.password

    res.status(200).json({
        status: "error",
        token,
        user: userData
    })

  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      status: "error",
      message: "Server error",
      error: error.message,
    });
  }
};
