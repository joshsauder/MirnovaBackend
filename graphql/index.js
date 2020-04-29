const { gql } = require('apollo-server-express')

const { user } = require('./users/type')
const { userResolver } = require('./users/resolver')


export const typeDefs = user
export const resolvers = userResolver