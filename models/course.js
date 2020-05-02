const mongoose = require('mongoose')

const questions = {
    question: {
        type: String,
        required: 'Question is Required'
    },
    answer: String,
    points: Number,
    images: [String]
}

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is Required"
    },
    dateAdded: Date,
    questions: [questions]
})

courseSchema.pre('save', () => {
    this.dateAdded = new Date()
})

module.exports = mongoose.model('Course', courseSchema)