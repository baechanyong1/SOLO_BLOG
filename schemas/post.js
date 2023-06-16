const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postsId: {
    type: Number,
    unique: true,
  },
  nickname: {
    type: String,
    required: true,
    unique: false,
  },
  title: {
    type: String,
  },
  bodyText: {
    type: String,
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("Posts", postSchema);
