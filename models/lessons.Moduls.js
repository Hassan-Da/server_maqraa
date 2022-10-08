const mongoose = require("mongoose");
const lessonsSchema = new mongoose.Schema({
  teacherId: { type: mongoose.Types.ObjectId },
  date: { type: Date },
  lessonLink: { type: String },
  groupe: { type: String },
});

module.exports = mongoose.model("lessons", lessonsSchema, "lessons");
