const pool = require("../config/db")

exports.getAllUsers = async (req, res) => {
    try {
        const { rows: users } = await pool.query(
            "SELECT * FROM users;"
        )
        res.status(200).json({
            status: "success",
            data: users
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
          status: "error",
          message: "Server error",
          error: error.message,
        });
    }
}