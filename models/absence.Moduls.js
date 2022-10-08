const mongoose = require("mongoose");
const absenceSchema = new mongoose.Schema({
    studentId: { type: mongoose.Types.ObjectId },
    date: { type: Date },
    absenceHrs: { type: Number },
});

module.exports = mongoose.model("absence", absenceSchema, "absence");
