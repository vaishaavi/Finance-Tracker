// src/api/Transactions.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Update if deployed

// Set token in header
const authHeader = () => {
  const token = localStorage.getItem('token');
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const fetchTransactions = async () => {
  const res = await axios.get(`${API_BASE_URL}/transactions`, authHeader());
  return res.data;
};

export const addTransaction = async (transaction) => {
  const res = await axios.post(`${API_BASE_URL}/transactions`, transaction, authHeader());
  return res.data;
};

export const deleteTransaction = async (id) => {
  const res = await axios.delete(`${API_BASE_URL}/transactions/${id}`, authHeader());
  return res.data;
};

export const registerUser = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/auth/register`, data);
  return res.data;
};

export const loginUser = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/auth/login`, data);
  return res.data;
};
