const db = require("../config/db.js");

const getAllStores = (callback) => {
  db.query("SELECT * FROM stores", callback);
};

const createStore = (storeData, callback) => {
  db.query("INSERT INTO stores SET ?", storeData, callback);
};

const getStoreWithRatings = (callback) => {
  const query = `
    SELECT s.*, AVG(r.rating) as average_rating 
    FROM stores s 
    LEFT JOIN ratings r ON s.id = r.store_id 
    GROUP BY s.id
  `;
  db.query(query, callback);
};

module.exports = { getAllStores, createStore, getStoreWithRatings };
