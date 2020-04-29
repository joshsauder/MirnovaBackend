const {findCourseById, findAllCourses, postCourse, updateCourse} = require('../../dao/course')

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
            const course = findCourseById(courseId)
            course.questions[question.id] = {...question}

            const updatedCourse = await updateCourse(course)
            return updatedCourse
        }
    }
}