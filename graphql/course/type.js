const {gql} = require("apollo-server-express")

export const course = gql`
    type Course {
        id: String
        name: String!
        dateAdded: String
        questions: [Questions]!
    }

    type Questions {
        id: Number!
        question: String!
        answer: String
        points: Number
        images: [String]!
    }

    type Query {
        Course(id: String!): Course
        Courses(): [Course]
    }

    type Mutation {
        createCourse(course: Course!): Course!
        updateQuestion(courseId: Number!, questionId: Number!, question: String, answer: String, points: Number, images: String): Course!
    }
`