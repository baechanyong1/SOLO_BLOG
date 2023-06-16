const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  cmtId: {
    type: String,
    required: true,
    unique: true,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Comments", commentsSchema);
