const { Schema, model } = require("mongoose");

const PioneerSchema = new Schema({
  name: {
    type: String
  },
  designation: {
    type: String
  },
  sdesc: {
    type: String
  },
  desc: {
    type: String
  },
  img: {
    type: String
  },
  aimg: {
    type: String
  },
});

const PioneerModel = model("Pioneers", PioneerSchema, "Pioneers");

module.exports = PioneerModel;
