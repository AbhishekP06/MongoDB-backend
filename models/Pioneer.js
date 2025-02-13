const mongoose = require("mongoose");

const pioneerSchema = new mongoose.Schema({
  name: String,
  designation: String,
  sdesc: String,
  desc: String,
  img: String,
  aimg: String,
});

const Pioneer = mongoose.model("Pioneer", pioneerSchema);

module.exports = Pioneer;
