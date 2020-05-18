const {findCourseByName, 
    findAllCourses, 
    postCourse, 
    updateCourse} = require('../../dao/course')

export const courseResolver = {
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

            const updatedCourse = await updateCourse(course)
            return updatedCourse
        }
    }
}