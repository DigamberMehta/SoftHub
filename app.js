if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
 }
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const flash = require('connect-flash');


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const MONGO_URI = "mongodb+srv://digamber2603:0Qhr4l72ne17bGxz@softhub-database.tjolecp.mongodb.net/?retryWrites=true&w=majority&appName=softhub-database";
const dbUrl = process.env.ATLASDB_URL;
console.log(dbUrl);

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret : process.env.SECRET,
  },
  touchAfter: 24 * 3600 // time period in seconds
});
store.on("error", function(e) {
  console.log("Session Store Error", e);
});
const sessionOptions = {
  store,
  secret : process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 30, // 30 days
    maxAge: 1000 * 60 * 60 * 24 * 30
  }
};



app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.use((req, res, next) => {
  res.locals.successMessages = req.flash('success');
  res.locals.errorMessages = req.flash('error');
  next();
});

// app.get("/demo", async (req, res) => {
//   let fakeUser = new User({
//      email: 'demo@gmail.com',
//      username: 'demo'
//   });
// let register =  await User.register(fakeUser, 'demoz');
// res.send(register);
// });
const categoryIcons = {
  'navigation': '/images/menu-icon/bx-book-content.svg',
  'communication': '/images/menu-icon/bx-chat.svg',
  'audio': '/images/menu-icon/bx-music.svg',
  'antivirus': '/images/menu-icon/bx-shield.svg',
  'video': '/images/menu-icon/bx-video.svg',
  'browser': '/images/menu-icon/bxl-chrome.svg',
  'utilities': '/images/menu-icon/bxs-cog.svg',
  'education': '/images/menu-icon/bxs-graduation.svg',
  'travel': '/images/menu-icon/bxs-plane.svg',
  'games': '/images/menu-icon/game-solid-48.png'
};

// Middleware to add categoryIcons to res.locals
app.use((req, res, next) => {
  res.locals.categoryIcons = categoryIcons;
  next();
});
app.use(async (req, res, next) => {
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

    // Set listingsByCategory on res.locals
    res.locals.listingsByCategory = listingsByCategory;
    next();
  } catch (error) {
    console.error(error);
    next(error); // Pass error to Express error handler
  }
});

app.use("/home", listingRouter);
app.use("/home/download/:id/reviews", reviewRouter);
app.use("/", userRouter);

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get('/search/results', wrapAsync( async (req, res) => {
  const searchTerm = req.query.q || '';
  if (!searchTerm.trim()) {
    return res.render('searchResults', { 
      searchTerm: searchTerm,
      results: [],
      error: 'Please enter a search term.'
    });
  }
  
  try {
    const regex = new RegExp(searchTerm, 'i'); // 'i' for case-insensitive
    const results = await Listing.find({
      $or: [
        { title: regex },
        { 'description.whatItIs': regex },
        { 'description.keyFeatures': regex },
        { 'description.securityFeatures': regex },
        { keywords: regex },
        { tags: regex }
      ]
    });

    res.render('searchResults', { 
      searchTerm: searchTerm,
      results: results,

    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}));

app.get('/home/category/:category', wrapAsync(async (req, res) => {
  try {
    const category = req.params.category;
    // Fetch listings for the specific category
    const listings = await Listing.find({ category: category });

    // Render the category page with the fetched listings
    res.render('home/category', { category, listings });
  } catch (error) {
    console.error('Error fetching listings for category:', error);
    res.status(500).send('Internal Server Error');
  }
}));



app.put("/api/listings/:id/incrementDownloadCount", wrapAsync(async (req, res) => {
  try {
    const listingId = req.params.id;

    console.log(`Incrementing download count for listing ID: ${listingId}`);

    const listing = await Listing.findById(listingId);
    if (!listing) {
      console.log('Listing not found');
      return res.status(404).send('Listing not found');
    }

    listing.downloadCount = (listing.downloadCount || 0) + 1;
    await listing.save();

    res.status(200).send('Download count incremented');
  } catch (error) {
    console.error('Error incrementing download count:', error);
    res.status(500).send('Internal Server Error');
  }
}));


app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
}
);

app.use((err, req, res, next) => {
  console.log(err);
  req.flash('error', err);
  return res.redirect('/home'); // Adjust this as needed
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


