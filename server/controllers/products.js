const Product = require("../models/product");

const getAllproducts = async (req, res) => {
  const Mydata = await Product.find(req.query).sort("price");
  res.status(200).json({ Mydata });
};

const getAllproductstesting = async (req, res) => {
  const Mydata = await Product.find(req.query);
  console.log(req.query);
  res.status(200).json({ Mydata });
};

module.exports = { getAllproducts, getAllproductstesting };
