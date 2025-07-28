 const db = require("../db");

// Get all transactions
const getAllTransactions = (req, res) => {
  const query = "SELECT * FROM transactions ORDER BY id DESC";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error getting transactions:", err);
      return res.status(500).json({ error: "Failed to fetch transactions" });
    }
    res.status(200).json(results);
  });
};

// Add a transaction
const addTransaction = (req, res) => {
  const { title, amount, type } = req.body;
  const query = "INSERT INTO transactions (title, amount, type) VALUES (?, ?, ?)";
  db.query(query, [title, amount, type], (err, result) => {
    if (err) {
      console.error("Error adding transaction:", err);
      return res.status(500).json({ error: "Failed to add transaction" });
    }
     res.status(201).json({
      message: "Transaction added successfully",
      data: {
        id: result.insertId,
        title,
        amount,
        type,
      },
    });

  });
};

module.exports = {
  getAllTransactions,
  addTransaction,
};
