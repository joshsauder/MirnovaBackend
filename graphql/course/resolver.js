const {findCourseByName, 
    findAllCourses, 
    postCourse } = require('../../dao/course')

exports.courseResolver = {
    Query: {
        Course: async (root, {name}) => {
            let courses = await findCourseByName(name)
            return courses
        },
        Courses: async () => {
            const courses = await findAllCourses()
            return courses
        }
    },

    Mutation: {
        createCourse: async (root, {course}) => {
            const newCourse = await postCourse(course)
            return newCourse
        },
        updateQuestion: async (root, {courseName, questionNumber, question}) => {
            const course = await findCourseByName(courseName)
            course.questions[questionNumber] = question

            const updatedCourse = await postCourse(course)
            return updatedCourse
        },
        updateCourse: async (root, {course}) => {
            const updatedCourse = await postCourse(course)
            return updatedCourse
        }
    }
}