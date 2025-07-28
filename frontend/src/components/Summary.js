import React from "react";
// ✅ Correct default import
import useTransactions from "../hooks/useTransactions";
import "../style/Summary.css";

const Summary = () => {
  const { transactions } = useTransactions();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + parseFloat(t.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + parseFloat(t.amount), 0);

  const balance = income - expense;

  return (
    <div className="summary-container">
      <h2>Summary</h2>
      <div className="summary-card income">Income: ₹{income.toFixed(2)}</div>
      <div className="summary-card expense">Expense: ₹{expense.toFixed(2)}</div>
      <div className="summary-card balance">Balance: ₹{balance.toFixed(2)}</div>
    </div>
  );
};

export default Summary;
