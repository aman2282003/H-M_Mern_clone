const mongoose = require("mongoose");

const connectDb = (MONGODB_URI) => {
  console.log("database connected");
  return mongoose.connect(MONGODB_URI, {});
};

module.exports = connectDb;
