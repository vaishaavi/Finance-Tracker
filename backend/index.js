const express = require("express");
const cors = require("cors");
const db = require("./db");

const transactionRoutes = require("./routes/transactions");
const authRoutes = require("./routes/auth");
const analyticsRoutes = require("./routes/analytics");

const { swaggerUi, swaggerSpec } = require("./config/swagger"); // ✅ Swagger

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Swagger UI Route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // ✅ Swagger docs

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/analytics", analyticsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend server running on port ${PORT}`);
  console.log(`📄 Swagger API Docs available at http://localhost:${PORT}/api-docs`);
});
