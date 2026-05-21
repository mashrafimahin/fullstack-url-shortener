const mongoose = require("mongoose");
const shortid = require("shortid");

// schema
const urlSchema = mongoose.Schema({
  fullURL: {
    type: String,
    required: true,
  },
  shortURL: {
    type: String,
    required: true,
    default: shortid.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

// exports
module.exports = new mongoose.model("URL", urlSchema);
