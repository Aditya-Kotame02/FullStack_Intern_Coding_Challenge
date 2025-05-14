const db = require("../config/db.js");

const findUserByEmail = (email, callback) => {
  db.query("SELECT * FROM users WHERE email = ?", [email], callback);
};

const createUser = (userData, callback) => {
  db.query("INSERT INTO users SET ?", userData, callback);
};

module.exports = { findUserByEmail, createUser };
