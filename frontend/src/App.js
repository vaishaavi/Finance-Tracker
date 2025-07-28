// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import ChartOverview from "./components/ChartOverview";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { TransactionProvider } from "./state/TransactionContext";
import { useTransactionContext } from "./state/TransactionContext";
import "./style/App.css";

const Dashboard = () => {
 const { addTransaction, deleteTransaction, transactions } = useTransactionContext();


  return (
    <div className="main-content">
      <Summary />
      <ChartOverview />
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction} />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <TransactionProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </TransactionProvider>
    </Router>
  );
};

export default App;
