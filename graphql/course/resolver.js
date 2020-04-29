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
            const newCourse = await postCourse(course)
            return newCourse
        },
        updateQuestion: async (root, {courseId, question}) => {
            const course = await findCourseById(courseId)
            course.questions[question.questionId] = {...question}

            const updatedCourse = await updateCourse(course)
            return updatedCourse
        }
    }
}