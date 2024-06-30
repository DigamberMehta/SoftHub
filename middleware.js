
const Review = require("./models/review");



// module.exports.saveRedirectUrl = (req, res, next) => {
//   if (req.session.redirectUrl) {
//     res.locals.redirectUrl = req.session.redirectUrl;
//     console.log("Redirected URL:", req.session.redirectUrl);
//   }
//   next();
// };
  
  // module.exports.saveRedirectUrl = (req, res, next) => {
  //   if (req.session.redirectUrl) {
  //     console.log('Redirect URL found in session, using it:', req.session.redirectUrl);
  //     res.locals.redirectUrl = req.session.redirectUrl;
  //     delete req.session.redirectUrl; 
  //     return next(); 
  //   }
  //   const currentUrl = req.originalUrl; 
  //   console.log('No redirect URL in session, saving current URL:', currentUrl);
  //   req.session.redirectUrl = currentUrl;     
  //   next();
  // };
  
  // module.exports.isLoggedIn = (req, res, next) => {
  //   if (!req.isAuthenticated()) {
  //     req.session.redirectUrl = req.originalUrl;
  //     console.log('User not authenticated, redirecting to login. Saving redirect URL:', req.originalUrl);
  //     return res.redirect("/login");
  //   }
  //   console.log('User authenticated');
  //   next();
  // };

  module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
      req.session.returnTo = req.originalUrl;
      // console.log('User not authenticated, redirecting to login. Saving redirect URL:', req.originalUrl);
      req.flash("error", "You must be signed in first!");
      return res.redirect("/login");
    }
    next();
  };


  
 

  module.exports.isReviewAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId)
  if (!review.author._id.equals(res.locals.currentUser._id)) {
    req.flash("error", "You do not have permission to do that");
    return res.redirect(`/home/download/${id}`);
  }
  next();
  };

