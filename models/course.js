const mongoose = require('mongoose')

const questions = {
    questionId: Number,
    question: {
        type: String,
        required: 'Question is Required'
    },
    answer: String,
    points: Number,
    images: [String]
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