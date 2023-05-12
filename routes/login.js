const express = require('express');
const {registerView, loginView,registerUser,loginUser } = require('../controllers/loginController');
const { dashboardView } = require("../controllers/dashboardController");
const { protectRoute } = require("../auth/protect");

const router = express.Router();
router.get('/register', registerView);
router.get('/login', loginView);

// Dashboard
router.get("/dashboard", protectRoute, dashboardView);

// blog
// router.get("/blog",protectRoute, blogView);


router.post('/register', registerUser);
router.post('/login', loginUser);
// router.post('/blog',protectRoute, uploadBlog);


router.get('/logout', (req, res) => {
    req.logout((err) => {
      if (err) return next(err);
      req.session.destroy();
      res.redirect('/login');
    });
  });
  
  
module.exports = router;