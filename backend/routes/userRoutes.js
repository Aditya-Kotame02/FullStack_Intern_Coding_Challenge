const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUserByEmail, createUser } = require("../models/userModel");
// userRoutes.js and ratingRoutes.js
const db = require('../config/db.js');

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, address, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { name, email, address, password: hashedPassword, role };

  createUser(newUser, (err, result) => {
    if (err) return res.status(500).send("Signup failed");
    res.status(201).send("User registered successfully");
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  findUserByEmail(email, async (err, results) => {
    if (err || results.length === 0) return res.status(400).send("User not found");

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid credentials");

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token, user });
  });
});

router.get("/all", (req, res) => {
  const query = `
    SELECT 
      u.id, u.name, u.email, u.address, u.role,
      IFNULL(AVG(r.rating), NULL) AS average_rating
    FROM users u
    LEFT JOIN stores s ON u.id = s.owner_id
    LEFT JOIN ratings r ON s.id = r.store_id
    GROUP BY u.id
  `;

  db.query(query, (err, results) => {
    if (err) return res.status(500).send("Error fetching users");
    res.json(results);
  });
});


router.post("/change-password", async (req, res) => {
  const { user_id, newPassword } = req.body;
  const hashed = await bcrypt.hash(newPassword, 10);

  db.query("UPDATE users SET password = ? WHERE id = ?", [hashed, user_id], (err) => {
    if (err) return res.status(500).send("Failed to update password");
    res.send("Password updated successfully");
  });
});


module.exports = router;
