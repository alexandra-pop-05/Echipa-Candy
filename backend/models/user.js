const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  loggedIn: { type: Boolean, required: true, default: false },
  dateAdded: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("User", User);
