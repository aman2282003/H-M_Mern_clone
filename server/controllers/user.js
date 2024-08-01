const User = require("../models/user");

const getAllusers = async (req, res) => {
  try {
    const Mydata = await User.find(req.query);
    res.status(200).json({ Mydata });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const {
      email,
      password,
      dateOfBirth,
      firstName,
      lastName,
      gender,
      postalCode,
    } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Create a new user if no existing user found
    const newUser = new User({
      email,
      password,
      dateOfBirth,
      firstName,
      lastName,
      gender,
      postalCode,
    });

    const savedUser = await newUser.save();
    res.status(201).json({ user: savedUser });
    console.log("User added successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllusers, createUser };
