const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Your Firstname is required:"],
        trim: true,
        minlength: 3,
        maxlength: 20,
    },
    lastname: {
        type: String,
        required: [true, "Your Lastname is required:"],
        trim: true,
        minlength: 3,
        maxlength: 20,
    },
    phone: {
        type: String,
        required: [true, "Your Phone is required:"],
    },
    dateofjoining: {
        type: Date,
        default: new Date(),
        trim: true,
    },
    activity: {
        type: String,
        required: [true, "Your Activity is required:"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Your Description is required:"],
        trim: true,
        minlength: 1,
        maxlength: 200,
    },
    durations: {
        type: Number,
        required: [true, "Your Duration is required:"],
        trim: true,
    },
    image: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Client", ClientSchema)