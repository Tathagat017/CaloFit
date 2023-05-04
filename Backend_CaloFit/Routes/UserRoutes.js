const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { userModel } = require("../Model/UserModel");

const userRouter = express.Router();
userRouter.use(express.json());

// Home page route
userRouter.get("/", (req, res) => {
  res.send("HOME PAGE");
});

// User registration route
userRouter.post("/register", async (req, res) => {
  try {
    const { name, email, sex, password, birthday, height, weight } = req.body;
    const hashedPassword = await bcrypt.hash(password, 5);
    const user = new userModel({
      name,
      email,
      sex,
      password: hashedPassword,
      birthday,
      height,
      weight
    });
    await user.save();
    res.send("You are registered");
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

// User login route
userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET);
          res.status(200).send({ message: "Login successful", token: token });
        } else {
          res.status(401).send({ message: "Wrong password" });
        }
      });
    } else {
      res.status(404).send({ message: "Please register yourself first" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = { userRouter };
