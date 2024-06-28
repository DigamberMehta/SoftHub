const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");


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

app.use("/home", listings);
app.use("/home/download/:id/reviews", reviews);

app.put("/api/listings/:id/incrementDownloadCount", async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).send('Listing not found');
    }

    listing.downloadCount = (listing.downloadCount || 0) + 1;
    await listing.save();

    res.status(200).send('Download count incremented');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});



const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
