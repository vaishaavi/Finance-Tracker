const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const {
  getAllTransactions,
  addTransaction,
} = require("../controllers/transactionsController");

/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: Manage income and expense transactions
 */

/**
 * @swagger
 * /api/transactions:
 *   get:
 *     summary: Get all user transactions
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of transactions
 *       401:
 *         description: Unauthorized
 */
router.get("/", authMiddleware, getAllTransactions);

/**
 * @swagger
 * /api/transactions:
 *   post:
 *     summary: Add a new transaction
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               amount:
 *                 type: number
 *               type:
 *                 type: string
 *                 enum: [income, expense]
 *     responses:
 *       201:
 *         description: Transaction created
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post("/", authMiddleware, addTransaction);

module.exports = router;
