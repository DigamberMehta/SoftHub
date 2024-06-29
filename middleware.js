const fs = require('fs');
const path = require('path');


module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
      req.session.redirectUrl = req.originalUrl;
      console.log('User not authenticated, redirecting to login. Saving redirect URL:', req.originalUrl);
      return res.redirect("/login");
    }
    console.log('User authenticated');
    next();
  };
  
  module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
      res.locals.redirectUrl = req.session.redirectUrl;
      delete req.session.redirectUrl;
      console.log('Redirect URL found in session, saving to res.locals:', res.locals.redirectUrl);
    } else {
      console.log('No redirect URL in session');
    }
    next();
  };
  


