const express = require("express");
const router = express.Router();
const ratingController = require("../controllers/ratingController");
// userRoutes.js and ratingRoutes.js
const db = require('../config/db.js');

router.post("/", ratingController.submitRating);
router.get("/user/:user_id", ratingController.getUserRatings);
router.get("/store/:store_id", ratingController.getStoreRatings);

router.get("/", (req, res) => {
  db.query("SELECT * FROM ratings", (err, results) => {
    if (err) return res.status(500).send("Error fetching ratings");
    res.json(results);
  });
});


module.exports = router;
