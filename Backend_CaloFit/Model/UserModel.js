const mongoose = require("mongoose");

const appSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    sex: { type: String, required: true },
    password: { type: String, required: true },
    birthday: { type: String, required: true },
    height: { type: String, required: true },
    weight: { type: String, required: true },
    role: {
      type: String,
      enum: ["basic", "gold", "pro"],
      default: "basic",
    },
  },
  {
    versionKey: false,
  }
);

const AppModel = mongoose.model("app", appSchema)

module.exports = { AppModel }