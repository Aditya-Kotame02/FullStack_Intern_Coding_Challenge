const Store = require("../models/storeModel");

exports.getStores = (req, res) => {
  Store.getStoreWithRatings((err, results) => {
    if (err) return res.status(500).send("Error fetching stores");
    res.json(results);
  });
};

exports.createStore = (req, res) => {
  const { name, email, address, owner_id } = req.body;
  Store.createStore({ name, email, address, owner_id }, (err, result) => {
    if (err) return res.status(500).send("Failed to create store");
    res.status(201).send("Store created successfully");
  });
};
