const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
const MONGO_URI = "mongodb://127.0.0.1:27017/Softhub";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URI);
}

const sessionOptions = {
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 30, // 30 days
    maxAge: 1000 * 60 * 60 * 24 * 30
  }
};

app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});


app.get("/demo", async (req, res) => {
  let fakeUser = new User({
     email: 'demo@gmail.com',
     username: 'demo'
  });
let register =  await User.register(fakeUser, 'demoz');
res.send(register);


}
);

app.use("/home", listingRouter);
app.use("/home/download/:id/reviews", reviewRouter);
app.use("/", userRouter);

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get('/search/results', async (req, res) => {
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
      results: results
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});




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
