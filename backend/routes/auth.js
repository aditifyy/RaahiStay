const express = require("express");
const router = express.Router();

const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");


// REGISTER

router.post("/register", async (req, res) => {

  try {

    const { name, email, password } = req.body;
if (!name || !email || !password) {
  return res.status(400).json({
    message: "All fields are required",
  });
}

if (password.length < 6) {
  return res.status(400).json({
    message: "Password must be at least 6 characters",
  });
}
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({

      name,

      email,

      password: hashedPassword,

    });

    await user.save();

    res.json({
      message: "User Registered Successfully",
    });

  } catch (err) {

    res.status(500).json(err);

  }

});



// LOGIN

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;
if (!email || !password) {
  return res.status(400).json({
    message: "Email and Password are required",
  });
}
    const user = await User.findOne({ email });

    if (!user) {

      return res.status(400).json({
        message: "User not found",
      });

    }

    const match = await bcrypt.compare(
      password,
      user.password
    );

    if (!match) {

      return res.status(400).json({
        message: "Wrong Password",
      });

    }

    const token = jwt.sign(
  {
    id: user._id,
  },
  process.env.JWT_SECRET
);

    res.json({

      token,

      message: "Login Successful",

    });

  } catch (err) {

    res.status(500).json(err);

  }

});

module.exports = router;