const Rating = require("../models/ratingModel");

exports.submitRating = (req, res) => {
  const { user_id, store_id, rating } = req.body;
  Rating.submitRating(user_id, store_id, rating, (err, result) => {
    if (err) return res.status(500).send("Failed to submit rating");
    res.send("Rating submitted");
  });
};

exports.getUserRatings = (req, res) => {
  const { user_id } = req.params;
  Rating.getUserRatings(user_id, (err, result) => {
    if (err) return res.status(500).send("Failed to get ratings");
    res.json(result);
  });
};

exports.getStoreRatings = (req, res) => {
  const { store_id } = req.params;
  Rating.getStoreRatings(store_id, (err, result) => {
    if (err) return res.status(500).send("Failed to get store ratings");
    res.json(result);
  });
};
