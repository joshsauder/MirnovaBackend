const mongoose = require('mongoose')

const completionSchema = mongoose.Schema({
    user: {
        type: String,
        required: "User is required"
    },
    course:{
        type: String,
        required: "Course is required"
    },
    numberOfTries: {
        type: Number,
        default: 0
    },
    completed: Boolean, 
    points: {
        type: Number,
        required: "Points are required"
    },
    questionsMissed: [String],
    dateAttempted: {
        type: Date,
        default: Date.now
    }
})

completionSchema.index({"user": 1, "course": 1}, {"unique": true})

completionSchema.pre('save', () => {
    this.dateAttempted = new Date()
})

module.exports = mongoose.model('Completion', completionSchema)