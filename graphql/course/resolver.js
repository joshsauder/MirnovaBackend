const {findCourseByName, 
    findAllCourses, 
    postCourse, 
    updateCourse, 
    findCourseImages} = require('../../dao/course')

export const courseResolver = {
    Query: {
        Course: async (root, {name}) => {
            let resolvedArr = await Promise.all([findCourseByName(name), findCourseImages(name)])
            console.log(resolvedArr)
            let courses = resolvedArr[0]
            courses.images = resolvedArr[1]
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
        updateQuestion: async (root, {courseId, questionNumber, question}) => {
            const course = await findCourseById(courseId)
            course.questions[questionNumber] = {...question}

            const updatedCourse = await updateCourse(course)
            return updatedCourse
        }
    }
}