const jwt = require("jsonwebtoken");

const users = []; // Temporary in-memory store

exports.registerUser = (req, res) => {
  const { username, password } = req.body;
  const existingUser = users.find((u) => u.username === username);
  if (existingUser) return res.status(400).json({ message: "User exists" });

  users.push({ username, password });
  res.status(201).json({ message: "User registered" });
};

exports.loginUser = (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
};
