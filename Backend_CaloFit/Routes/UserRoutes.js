const express = require("express");
const app = express();
app.use(express.json());

const appRouter = express.Router();
appRouter.use(express.json());

require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { AppModel } = require("../Model/UserModel");

appRouter.get("/", (req, res) => {
  res.send("HOME PAGE");
});

appRouter.post("/register", async (req, res) => {
  let { name, email, sex, password, birthday, height, weight } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        console.log("err++++++", e);
      } else {
        const app = new AppModel({ name, email, sex, password: hash, birthday, height, weight });
        await app.save();
        res.send("You are Registered");
      }
    });
  } catch (e) {
    console.log("err######", e);
  }
});

appRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await AppModel.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          var token = jwt.sign({ userID: user._id }, "key");
          res
            .status(200)
            .send({ message: "Login Successfull", token: token });
        } else {
          res.status(401).send({ message: "Wrong password" });
        }
      });
    } else {
      res.status(404).send({ message: "Please register yourself first !!!!" });
    }
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
});


module.exports = { appRouter };