const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
  studentId: { type: mongoose.Types.ObjectId },
  date: { type: Date },
  reviewedHizb: {
    hizb: { type: Number },
    eigth: { type: Number },
  },
  rating: { type: Number }
});

module.exports = mongoose.model("review", reviewSchema, "review");
