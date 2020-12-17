const { gql } = require('apollo-server-lambda')

const { merge } = require('lodash') 

const { user } = require('./users/type')
const { userResolver } = require('./users/resolver')
const { course } = require('./course/type')
const { courseResolver } = require('./course/resolver')
const {completion} = require('./completion/type')
const {completionResolver} = require('./completion/resolver')

const {DateResolver} = require('./datatypes/date')
 
let query = gql`
    type Query {
        _: String
    }

    type Mutation {
        _: String
    }
`

exports.typeDefs = [query ,user, course, completion]
exports.resolvers = merge(userResolver, courseResolver, completionResolver, DateResolver)