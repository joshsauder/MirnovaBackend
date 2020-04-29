const Course = require('../../models/course')

export const courseResolver = {
    Query: {
        Course: async (root, {id}) => {
            const course = Course.findById(id)
            return course
        },
        Courses: async () => {
            const courses = await Course.find({})
            return courses
        }
    },

    Mutation: {
        createCourse: async (root, args) => {
            const course = new Course(args)
            await course.save()

            return course
        },
        updateQuestion: async (root, {courseId, question}) => {
            const course = await Course.findById(id)
            course.questions[question.id] = {...question}
            
            await Course.update({_id: course._id}, course)
            return course
        }
    }
}