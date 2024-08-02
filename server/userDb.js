require("dotenv").config();
const connectDb = require("./db/connect");
const user = require("./models/user");
const bcrypt = require("bcrypt");
const userJson = require("./users.json");

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URI);
    for (let user of userJson) {
      user.password = await bcrypt.hash(user.password, 10);
    }

    await user.deleteMany();
    await user.create(userJson);
    console.log("Data successfully inserted");
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

start();
