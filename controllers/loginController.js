const User = require("../models/User");
// const Blog = require("../models/Blog");

const bcrypt = require("bcryptjs");
const passport = require("passport");

//Post Request that handles Register
const registerUser = (req, res) => {
    const { name, email, location, password, confirm } = req.body;
    if (!name || !email || !password || !confirm) {
      console.log("Fill empty fields");
    }
    //Confirm Passwords
    if (password !== confirm) {
      console.log("Password must match");
    } else {
      //Validation
      User.findOne({ email: email }).then((user) => {
        if (user) {
          console.log("email exists");
          res.render("register", {
            name,
            email,
            password,
            confirm,
          });
        } else {
          //Validation
          const newUser = new User({
            name,
            email,
            location,
            password,
          });
          //Password Hashing
          bcrypt.genSalt(10, (err, salt) =>
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(res.redirect("/login"))
                .catch((err) => console.log(err));
            })
          );
        }
      });
    }
  };

// loginUser

const loginUser = (req, res) => {
    const { email, password } = req.body;
    //Required
    if (!email || !password) {
      console.log("Please fill in all the fields");
      res.render("login", {
        email,
        password,
      });
    } else {
      passport.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/login",
        failureFlash: true,
      })(req, res);
    }
  };

const registerView = (req, res) => {
    res.render("register", {
    } );
}
// For View 
const loginView = (req, res) => {

    res.render("login", {
    } );
}


// For View 
// const blogView = (req, res) => {

//   res.render("blog", {
//   } );
// }



// upload blog


// //Post Request that handles Register
// const uploadBlog = (req, res) => {
//   const { title, url, blog} = req.body;
//   if (!title || !url || !blog ) {
//     console.log("Fill empty fields");
//   } else {

//     console.log("reached here")
//         //Validation
//         const newBlog = new Blog({
//           title,
//           url,
//           blog,
//         });

//         newBlog.save().then(res.redirect("/blog"))

//   }
//   }

  module.exports =  {
    registerView,
    loginView,
    registerUser,
    loginUser
};


