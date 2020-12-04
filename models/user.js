const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: String,
    email: {
        type: String,
        required: 'Email is Required',
        unique: true
    },
    name: {
        type: String,
        required: 'Name is Required'
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

userSchema.pre("save", () => {
    user.createdDate = new Date()
})

module.exports = mongoose.model('User', userSchema)