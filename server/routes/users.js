const express = require("express");
const router = express.Router();
const {getAllusers} = require("../controllers/user");
const { createUser } = require("../controllers/user");

router.route("/").get(getAllusers);
router.route("/").post(createUser);

module.exports = router;
