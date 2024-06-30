const express = require('express');
const router = express.Router();
const Listing = require("../models/listing");
const { isLoggedIn } = require("../middleware");
// const { listingSchema, reviewSchema } = require('../schema.js');
// const validateListing = (req, res, next) => {
//     const { error } = listingSchema.validate(req.body);
//     if (error) {
//       const msg = error.details.map((el) => el.message).join(",");
//       throw new Error(msg);
//     } else {
//       next();
//     }
//   };
 


  
  router.get("/", async (req, res) => {
    
    const allListings = await Listing.find({});
    res.render("home/index.ejs", { allListings });
  });
  
  router.get("/download/:id", async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate({path : "reviews", populate : {path : "author"}});
    res.render("home/download.ejs", { listing });
  });

  
  
  module.exports = router;