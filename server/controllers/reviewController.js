const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  try {
    const { title, content, rating } = req.body;
    const newReview = await Review.create({ title, content, rating });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};