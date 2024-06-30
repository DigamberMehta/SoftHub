const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
// const { saveRedirectUrl } = require("../middleware"); // Ensure this middleware exists and is correctly exported

router.get("/signup", (req, res) => {
  res.render("users/signup");
});

router.post("/signup", async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) throw err;
      res.redirect("/home");
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error registering user");
  }
});

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true // Ensure this is configured if using connect-flash for messages
  }),
  async (req, res) => {
    req.flash("success", `Welcome back, ${req.user.username}!`);
    res.redirect("/home");
  }
);

router.get("/logout", (req, res, next) => {
  let user = req.user.username;
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", `Logout from, ${user}!`);
    res.redirect("/home");

  });
});

module.exports = router;
