const db = require("../config/db.js");

const submitRating = (user_id, store_id, rating, callback) => {
  const query = `
    INSERT INTO ratings (user_id, store_id, rating)
    VALUES (?, ?, ?)
    ON DUPLICATE KEY UPDATE rating = VALUES(rating)
  `;
  db.query(query, [user_id, store_id, rating], callback);
};

const getUserRatings = (user_id, callback) => {
  const query = `
    SELECT r.*, s.name AS store_name, s.address 
    FROM ratings r 
    JOIN stores s ON r.store_id = s.id 
    WHERE r.user_id = ?
  `;
  db.query(query, [user_id], callback);
};

const getStoreRatings = (store_id, callback) => {
  const query = `
    SELECT u.name, r.rating 
    FROM ratings r 
    JOIN users u ON r.user_id = u.id 
    WHERE r.store_id = ?
  `;
  db.query(query, [store_id], callback);
};

module.exports = { submitRating, getUserRatings, getStoreRatings };
