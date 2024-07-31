require("dotenv").config();
const connectDb = require("./db/connect");
const Product = require("./models/product");
const productJson = require("./products.json");

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URI);
    await Product.deleteMany();
    await Product.create(productJson);
    console.log("Data successfully inserted");
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

start();
