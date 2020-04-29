const mongoose = require('mongoose')

const questions = {
    question: String,
    answer: String,
    points: Number,
    images: String
}

const courseSchema = new mongoose.Schema({
    _id: String,
    name: String,
    dateAdded: Date,
    questions: [questions]
})

courseSchema.pre('save', () => {
    this.dateAdded = new Date()
})

module.exports = mongoose.model('Course', courseSchema)