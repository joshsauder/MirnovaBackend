const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: String,
    email: {
        type: String,
        required: 'Email is Required'
    },
    name: {
        type: String,
        required: 'Name is Required'
    },
    dob: String,
    createdDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)