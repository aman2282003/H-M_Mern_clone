const getAllproducts = async (req, res) => {
  res.status(200).json({ msg: "Here are all products" });
};

const getAllproductstesting = async (req, res) => {
  res.status(200).json({ msg: "This is a test endpoint" });
};

module.exports = { getAllproducts, getAllproductstesting };
