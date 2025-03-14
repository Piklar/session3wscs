const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    genre: String,
    description: String,
    authors: Array,
    stocks: Number,
    isAvailable: {
        type: Boolean,
        default: true
    },  
})

module.exports = mongoose.model("Book", bookSchema);