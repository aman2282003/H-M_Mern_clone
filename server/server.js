const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDb = require("./db/connect");
const product_roots = require("./routes/products");
const app = express();

const PORT = process.env.PORT || 3000;



app.get("/", (req, res) => {
  res.send("Data is coming");
});
   
app.use("/api/products", product_roots);

const start = async () => {
  try {
    await connectDb();
    app.listen(PORT, async () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {}
  
};

start()
