const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String },
  password: { type: String },
  phone: { type: String },
  groupe: { type: String },
  role: { type: String },
});

module.exports = mongoose.model("user", userSchema, "user");
