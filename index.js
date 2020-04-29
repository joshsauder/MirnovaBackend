const express = require('express');
const { ApolloServer } = require('apollo-server-express');
//const { ApolloServer, makeExecutableSchema } = require('apollo-server-lambda');
const {typeDefs, resolvers} = require('./graphql/index')
const {connectToDB} = require('./utils/connect')

//const schema = makeExecutableSchema({typeDefs: typeDefs, resolvers: resolvers})

//make connection to DB
connectToDB().then(res => {
  const server = new ApolloServer({
    typeDefs: typeDefs, 
    resolvers: resolvers,
    playground: {
      endpoint: `http://localhost:4000/graphql`,
      settings: {
        'editor.theme': 'dark'
      }
    }
  })

  const app = express();

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
})
