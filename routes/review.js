const express = require('express');
const router = express.Router({ mergeParams: true}); // mergeParams: true is required to access the params from the parent router
const {reviewSchema } = require('../schema.js');
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");


const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
      const msg = error.details.map((el) => el.message).join(",");
      throw new Error(msg);
    } else {
      next();
    }
  };



// review post
router.post("/",  validateReview, async (req, res) => {

    const { id } = req.params;
    // console.log(id);
    const { rating, comment } = req.body.review;
    // console.log(Listing);
  
    try {
      const listing = await Listing.findById(id);
      if (!listing) {
        return res.status(404).send('Listing not found');
      }
  
      const review = new Review({ rating, comment });
      await review.save();
  
      listing.reviews.push(review._id);
      await listing.save();
  
      res.redirect(`/home/download/${id}`);
    } catch (error) {
      console.error('Error adding review:', error);
      res.status(500).send('Server error');
    }
  });
  
  // review delete
  router.delete("/:reviewId", async (req, res) => {
    const { id, reviewId } = req.params;
  
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
  
    res.redirect(`/home/download/${id}`);
  });
  


  module.exports = router;