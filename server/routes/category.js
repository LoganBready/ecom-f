const router = require("express").Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  try {
    const category = await pool.query("SELECT * FROM category WHERE ");
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});
module.exports = router;
