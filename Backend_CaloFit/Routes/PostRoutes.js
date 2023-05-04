const express = require("express");
const app = express();
app.use(express.json());

const postRouter = express.Router();
postRouter.use(express.json());

require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { PostModel } = require("../Model/PostModel");

postRouter.get("/", async (req, res) => {
  let searchID = req.body.userID;
  try {
    let post = await PostModel.find({ userID: searchID });
    res.send(post);
  } catch (e) {
    console.log("err", e);
  }
});

postRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const post = new PostModel(payload);
    await post.save();
    res.send("Post Created");
  } catch (e) {
    console.log("err", e);
  }
});

postRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const note = await PostModel.find({ _id: id });
  const userID_in_note = note[0].userID;
  const userID_making_req = req.body.userID;
  console.log(userID_in_note, userID_making_req);
  try {
    if (userID_making_req !== userID_in_note) {
      res.send("You are not Authorized");
    } else {
      await PostModel.findByIdAndDelete({ _id: id });
      res.send("Post Deleted");
    }
  } catch (e) {
    console.log("err", e);
  }
});

postRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
  let payload = req.body;
  const note = await PostModel.find({ _id: id });
  const userID_in_note = note[0].userID;
  const userID_making_req = req.body.userID;
  // console.log(userID_in_note,userID_making_req)
  try {
    if (userID_making_req !== userID_in_note) {
      res.send("You are not Authorized");
    } else {
      await PostModel.findByIdAndUpdate({ _id: id }, payload);
      res.send("Post Updated");
    }
  } catch (e) {
    console.log("err", e);
  }
});

module.exports = { postRouter };