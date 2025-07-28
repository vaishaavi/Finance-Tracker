import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
} from "recharts";
import useTransactions from "../hooks/useTransactions";
import "../style/Chart.css";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#8dd1e1", "#d0ed57"];

const ChartOverview = () => {
  const { transactions } = useTransactions();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const barData = [
    { name: "Income", amount: income },
    { name: "Expense", amount: expense },
  ];

  const categoryData = Object.values(
    transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, curr) => {
        const cat = curr.category || "Other";
        acc[cat] = acc[cat] || { name: cat, value: 0 };
        acc[cat].value += Number(curr.amount);
        return acc;
      }, {})
  );

  const monthlyTrendData = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    const income = transactions
      .filter(
        (t) =>
          t.type === "income" &&
          new Date(t.date).getMonth() + 1 === month
      )
      .reduce((sum, t) => sum + Number(t.amount), 0);
    const expense = transactions
      .filter(
        (t) =>
          t.type === "expense" &&
          new Date(t.date).getMonth() + 1 === month
      )
      .reduce((sum, t) => sum + Number(t.amount), 0);
    return { month, income, expense };
  });

  return (
    <div className="chart-container">
      <h3>Dashboard Overview</h3>

      {/* Income vs Expense Bar Chart */}
      <div className="chart-section">
        <h4>Income vs Expense</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Category-wise Pie Chart */}
      <div className="chart-section">
        <h4>Category-wise Expenses</h4>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#82ca9d"
              label
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly Trend Line Chart */}
      <div className="chart-section">
        <h4>Monthly Trend</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="#82ca9d" />
            <Line type="monotone" dataKey="expense" stroke="#ff7f50" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartOverview;
