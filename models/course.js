const mongoose = require('mongoose')

const questions = {
    question: {
        type: String,
        required: 'Question is Required'
    },
    answer: String,
    points: Number
}

const courseSchema = new mongoose.Schema({
    name: String,
    dateAdded: Date,
    questions: [questions]
})

courseSchema.pre('save', () => {
    this.dateAdded = new Date()
})

module.exports = mongoose.model('Course', courseSchema)