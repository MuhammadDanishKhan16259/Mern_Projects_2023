const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "Your username is required"],
        minlength: 3,
        maxlength: 255,
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
        minlength: 3,
        maxlength: 255,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);
