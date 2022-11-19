const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config");
const user = require("../model/userModel");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//get all users
router.get("/users", (req, res) => {
  user.find({}, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

module.exports = router;
