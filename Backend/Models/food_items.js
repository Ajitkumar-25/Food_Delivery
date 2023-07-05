const mongoose = require("mongoose");
const food_items = new mongoose.Schema({
  CtegoryName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("fooditems", food_items);
