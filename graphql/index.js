const user = require('./users/user')
const UserResolvers = require('./users/resolver')

export const typeDefs = [user]
export const resolvers = [UserResolvers]