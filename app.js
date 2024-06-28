const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const Review = require("./models/review");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
const MONGO_URI = "mongodb://127.0.0.1:27017/Softhub";

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URI);
}



app.get("/", (req, res) => {
  res.redirect("/home"); 
});

app.get("/home", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("home/index.ejs", { allListings });
});

app.get("/home/download/:id",  async (req, res) => {
  const { id } = req.params;

  const listing = await Listing.findById(id);
 
  res.render("home/download.ejs", { listing });
}); 

app.get("/home/show", (req, res) => {
  res.render("home/show.ejs");
});

app.post("/home/download/:id/reviews", async (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body;

  try {
    // Find the listing
    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).send('Listing not found');
    }

    // Create and save the new review
    const review = new Review({ rating, comment });
    await review.save();

    // Add the review's ObjectId to the listing's reviews array
    listing.reviews.push(review._id);
    await listing.save();

    res.redirect(`/home/download/${id}`);
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).send('Server error');
  }
});




app.get("/home/categories", (req, res) => {
  res.render("home/categories.ejs");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
