const {gql} = require("apollo-server-express")

export const user = gql`
    type User {
        id: ID!
        email: String!
        name: String!
        age: String!
        createdDate: String!
    }

    extend type Query {
        User(email: String!): User
    }

    extend type Mutation {
        createUser(email: String!, name: String!, dob: String): User
    } 
`
