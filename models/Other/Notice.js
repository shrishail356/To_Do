const mongoose = require("mongoose");

const Notice = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
    },
    link: {
        type: String,
    },
    wallet1: {
        type: Boolean,
        default: false,
    },
    wallet2: {
        type: Boolean,
        default: false,
    },
    wallet3: {
        type: Boolean,
        default: false,
    },
    wallet4: {
        type: Boolean,
        default: false,
    },
    wallet5: {
        type: Boolean,
        default: false,
    },
    wallet6: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

module.exports = mongoose.model("Notice", Notice);

