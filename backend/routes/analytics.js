const express = require('express');
const router = express.Router();
const db = require('../db');
const authenticateUser = require('../middleware/auth'); // adjust path if needed

// Monthly Analytics
router.get('/monthly', authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id;

    const [rows] = await db.query(`
      SELECT 
        DATE_FORMAT(date, '%Y-%m') AS month, 
        SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) AS total_income,
        SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS total_expense
      FROM transactions 
      WHERE user_id = ? 
      GROUP BY month
      ORDER BY month DESC
    `, [userId]);

    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

// Yearly Analytics
router.get('/yearly', authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id;

    const [rows] = await db.query(`
      SELECT 
        YEAR(date) AS year, 
        SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) AS total_income,
        SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS total_expense
      FROM transactions 
      WHERE user_id = ? 
      GROUP BY year
      ORDER BY year DESC
    `, [userId]);

    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

module.exports = router;
