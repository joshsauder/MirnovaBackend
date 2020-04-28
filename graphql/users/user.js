import {gql} from "apollo-server-lambda"

export const typeDef = gql`
    type User {
        id: String!
        email: String!
        name: String!
        age: String!
        createdDate: String!
    }

    extend type Query {
        User(email: String!): User!
        User(id: String!): User!
    }

    extend type Mutation {
        createUser({email: String!, name: String!, age: String})
    } 
`
