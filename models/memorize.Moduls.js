const mongoose = require("mongoose");
const memorizeSchema = new mongoose.Schema({
    studentId: { type: mongoose.Types.ObjectId },
    date: { type: Date },
    memorizedHizb: {
        hizb: { type: Number },
        eigth: { type: Number },
    },
});

module.exports = mongoose.model("memorize", memorizeSchema, "memorize");
