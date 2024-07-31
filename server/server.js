const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./db/connect");
const product_routes = require("./routes/products");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Data is coming");
});

app.use("/api/products", product_routes);

const start = async () => {
  try {
    await connectDb(MONGODB_URI);
    app.listen(PORT, async () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error starting in server :", error);
  }
};

start();
