const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
    state: { type: Number },
});

module.exports = mongoose.model("login", loginSchema, "user");
