const express = require('express');
const router = express.Router({ mergeParams: true });
const { reviewSchema } = require('../schema.js');
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware");

const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new Error(msg);
  } else {
    next();
  }
};


// Review post
router.post("/",isLoggedIn, validateReview, async (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body.review;

  try {
    let listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).send('Listing not found');
    }

    let review = new Review({ rating, comment });
    review.author = req.user._id;
    console.log('Review author:', review);
    await review.save();


    listing.reviews.push(review._id);
    await listing.save();

    res.redirect(`/home/download/${id}`);
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).send('Server error');
  }
});

// Review delete
router.delete("/:reviewId",  async (req, res) => {
  const { id, reviewId } = req.params;

  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);

  res.redirect(`/home/download/${id}`);
});

module.exports = router;
