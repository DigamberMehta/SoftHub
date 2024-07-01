const express = require("express");
const router = express.Router({ mergeParams: true });
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { isLoggedIn , isReviewAuthor} = require("../middleware");

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
router.post("/", validateReview, async (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body.review;

  // Ensure the user is logged in
  if (!req.isAuthenticated()) {
    req.flash("error", "You need to be logged in to leave a review");
    return res.redirect("/login");
  }

  try {
    // Validate review rating
    if (rating < 1) {
      req.flash("error", "Rating must be at least 1");
      return res.redirect(`/home/download/${id}`);
    }

    let listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing not found");
      return res.redirect(`/home/download/${id}`);
    }

    let review = new Review({ rating, comment });
    review.author = req.user._id;

    await review.save();

    listing.reviews.push(review._id);
    await listing.save();
    req.flash("success", "Review added successfully");

    res.redirect(`/home/download/${id}`);
  } catch (error) {
    req.flash("error", "Server Error, Error in adding review");
    res.redirect(`/home/download/${id}`);
  }
});


// Review delete
router.delete("/:reviewId",isLoggedIn, isReviewAuthor, async (req, res) => { 
  const { id, reviewId } = req.params;

  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review deleted successfully");

  res.redirect(`/home/download/${id}`);
});

module.exports = router;


