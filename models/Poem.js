const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  hindi: {
    type: String,
    required: true,
  },
  hinglish: {
    type: String,
    required: true,
  },
  date:
   {
    type: Date,
    default: Date.now,
  },
});
const Poem = mongoose.model("Poem", UserSchema);
module.exports = Poem;