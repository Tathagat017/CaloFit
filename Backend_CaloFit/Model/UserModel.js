const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    sex: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    birthday: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    weight: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["basic", "gold", "pro"],
      default: "basic"
    }
  },
  {
    versionKey: false
  }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
