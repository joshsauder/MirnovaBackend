const {gql} = require("apollo-server-express")

export const course = gql`
    type Course {
        name: String!
        dateAdded: String
        questions: [Questions]!
        questionCount: Int!
    }

    type Questions {
        question: String!
        answer: String!
        points: Int
        images: [String]
    }

    extend type Query {
        Course(name: String!): Course
        Courses: [Course]
    }

    input CourseInput {
        name: String!
        questions: [QuestionInput]!
    }

    input QuestionInput {
        question: String!
        answer: String!
        points: Int
        images: [String]
    }

    extend type Mutation {
        createCourse(course: CourseInput!): Course!
        updateQuestion(courseName: String!, questionNumber: Int!, question: QuestionInput): Course!
    }
`