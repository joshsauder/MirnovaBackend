const {gql} = require("apollo-server-express")

export const completion = gql `
    type Completion{
        user: String!
        course: String!
        numberOfTries: Number
        completed: Boolean
        points: Number!
        questionsMissed: [String]
        dateAttempted: String
    }

    input CompletionInput {
        user: String!
        course: String!
        completed: Boolean!
        points: Number!
        questionsMissed: [String]
    }

    extend type Query {
        Completion(course: String!, user: String!): Completion!
        Completions(user: String!): [Completion]
    }

    extend type Mutation {
        updateCompletion(completion: CompletionInput!): Completion!
    }
`