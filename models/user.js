const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: String,
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

export default mongoose.model('User', userSchema)