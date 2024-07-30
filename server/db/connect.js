const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const connectDb = () => {
  console.log("database connected");
  return mongoose.connect(MONGODB_URI, {});
};

module.exports = connectDb;
