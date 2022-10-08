const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullName: { type: String },
  age: { type: Number },
  sexe: { type: String },
  hizb: { type: Number },
  type: { type: String },
  eduactionaLevel: { type: String },
  nationality: { type: String },
  country: { type: String },
  groupe: { type: String },
  narration: { type: String },
  email: { type: String },
  password: { type: String },
  state: { type: Number },
  role: { type: String },
  subscription: { type: String },
});

module.exports = mongoose.model("student", studentSchema, "user");
