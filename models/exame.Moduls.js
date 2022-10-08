const mongoose = require("mongoose");

const exameSchema = new mongoose.Schema({
  teacherId: {
    type: mongoose.Types.ObjectId,
  },

  title: { type: String },

  date: { type: Date },

  groupe: { type: String },
});

module.exports = mongoose.model("exame", exameSchema, "exame");
