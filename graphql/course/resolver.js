const {findCourseById, findAllCourses, postCourse, updateQuestion} = require('../../dao/course')

export const courseResolver = {
    Query: {
        Course: async (root, {id}) => {
            const course = await findCourseById(id)
            return course
        },
        Courses: async () => {
            const courses = await findAllCourses()
            return courses
        }
    },

    Mutation: {
        createCourse: async (root, {course}) => {
            const newCourse = postCourse(course)
            return newCourse
        },
        updateQuestion: async (root, {courseId, question}) => {
            const course = await updateQuestion(courseId, question)
            return course
        }
    }
}