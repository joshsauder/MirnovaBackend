const {gql} = require("apollo-server-express")

exports.completion = gql `
    scalar Date
    
    type Completion {
        user: String!
        course: String!
        numberOfTries: Int!
        average: Float!
        completed: Boolean!
        points: Int!
        dateAttempted: Date!
    }

    input CompletionInput {
        user: String!
        course: String!
        completed: Boolean!
        points: Int!
    }

    extend type Query {
        Completion(course: String!, user: String!): Completion!
        Completions(user: String!): [Completion!]
    }

    extend type Mutation {
        updateCompletion(completion: CompletionInput!): Completion!
    }
`