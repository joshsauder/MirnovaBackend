const Course = require('../models/course')

exports.findCourseById = async (id) => {
    const course = await Course.findById(id)
    return course
}

exports.findAllCourses = async () => {
    const courses = await Course.find({})
    return courses
}

exports.postCourse = async (course) => {
    const newCourse = new Course(course)
    await newCourse.save()

    return newCourse
}

exports.updateQuestion = async (courseId, question) => {
    const course = this.findCourseById(courseId)
    course.questions[question.id] = {...question}
            
    await Course.update({_id: course._id}, course)
    return course
}