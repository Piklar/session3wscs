const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    completeName: {
        type: String,
        require: [true, "Complete name is required."]
    },
    contactNumber: {
        type: String,
        require: [true, "Contact number is required."]
    },
    email: {
        type: String,
        require: [true, "Email is required."]
    },
    password: {
        type: String,
        require: [true, "Password is required."]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    dateRegistered: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("User", userSchema);