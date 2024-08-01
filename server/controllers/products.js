const Product = require("../models/product");

const getAllproducts = async (req, res) => {
  try {
    const Mydata = await Product.find(req.query);
    res.status(200).json({ Mydata });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const getAllproductstesting = async (req, res) => {
//   try {
//     const Mydata = await Product.find(req.query);
//     console.log(req.query);
//     res.status(200).json({ Mydata });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

module.exports = { getAllproducts, getAllproductstesting };
