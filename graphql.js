const { ApolloServer, makeExecutableSchema } = require('apollo-server-lambda');
const {typeDefs, resolvers} = require('./graphql/index')
const {connectToDB} = require('./utils/connect')

const schema = makeExecutableSchema({typeDefs: typeDefs, resolvers: resolvers})

await connectToDB()
const server = new ApolloServer(schema)

exports.graphqlHandler = server.createHandler();

