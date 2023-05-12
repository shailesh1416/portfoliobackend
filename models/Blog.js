const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  blog: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Blog = mongoose.model("Blog", UserSchema);
module.exports = Blog;