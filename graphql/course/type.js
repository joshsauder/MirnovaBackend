const {gql} = require("apollo-server-express")

export const course = gql`
    type Course {
        id: String
        name: String!
        dateAdded: String
        questions: [Questions]!
    }

    type Questions {
        questionId: Int!
        question: String!
        answer: String
        points: Int
        images: [String]!
    }

    extend type Query {
        Course(id: String!): Course
        Courses: [Course]
    }

    input CourseInput {
        name: String!
        questions: [QuestionInput]!
    }

    input QuestionInput {
        questionId: Int!
        question: String!
        answer: String
        points: Int
        images: [String]!
    }

    extend type Mutation {
        createCourse(course: CourseInput!): Course!
        updateQuestion(courseId: String!, question: QuestionInput): Course!
    }
`