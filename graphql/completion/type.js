const {gql} = require("apollo-server-express")

export const completion = gql `
    scalar Date
    
    type Completion {
        user: String!
        course: String!
        numberOfTries: Int
        completed: Boolean
        points: Int!
        questionsMissed: [String]
        dateAttempted: Date
    }

    input CompletionInput {
        user: String!
        course: String!
        completed: Boolean!
        points: Int!
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