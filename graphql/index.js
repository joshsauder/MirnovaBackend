import { gql } from 'apollo-server-lambda'

const { merge } = require('lodash') 

const { user } = require('./users/type')
const { userResolver } = require('./users/resolver')
const { course } = require('./course/type')
const { courseResolver } = require('./course/resolver')


let query = gql`
    type Query {
        _: String
    }

    type Mutation {
        _: String
    }
`

export const typeDefs = [query ,user, course]
export const resolvers = merge(userResolver, courseResolver)