const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  category: {
    type: String,
    enum: {
      values: ["Ladies", "Men", "Baby", "Kids", "HandM_Home", "Sport"],
      message: `{VALUE} is not supported`,
    },
  },
  image :{
        type: String,
    },
});

module.exports = mongoose.model("Product", productSchema);
