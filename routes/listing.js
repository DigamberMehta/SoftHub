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
  try {
      // Fetch all listings
      const allListings = await Listing.find({});
      
      // Group listings by category
      const listingsByCategory = allListings.reduce((acc, listing) => {
          if (!acc[listing.category]) {
              acc[listing.category] = [];
          }
          acc[listing.category].push(listing);
          return acc;
      }, {});

      // Render the view with all required data
      res.render("home/index.ejs", { allListings, listingsByCategory });
  } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
  }
});






  
  router.get("/download/:id", async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate({path : "reviews", populate : {path : "author"}});
    res.render("home/download.ejs", { listing });
  });

  
  
  module.exports = router;