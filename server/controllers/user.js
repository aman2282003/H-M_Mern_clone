const bcrypt = require("bcrypt");
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
      firstName,
      lastName,
      gender,
    } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    const newUser = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      gender,
    });

    const savedUser = await newUser.save();
    res.status(201).json({ user: savedUser });
    console.log("User added successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllusers, createUser };
