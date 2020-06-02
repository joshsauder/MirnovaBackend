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
        required: "Name is Required",
        unique: true
    },
    dateAdded: Date,
    questions: [questions],
    pointsRequired: Number
})

courseSchema.virtual('questionCount').get(function(){
    return this.questions.length
})

courseSchema.pre('save', () => {
    this.dateAdded = new Date()
})

module.exports = mongoose.model('Course', courseSchema)