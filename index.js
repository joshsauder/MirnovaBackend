/**
 * When testing using a tradition Express server, comment out the apollo-server-lambda require statement
 * and uncomment the apollo-server-express require statement.
 * 
 * You will also need to uncomment the express statements and uncomment each current ApolloServer statements.
 * Also readd the playground statement for debugging purposes.
 * 
 */
//const express = require('express');
//const { ApolloServer } = require('apollo-server-express');
const { ApolloServer } = require('apollo-server-lambda');
const AWS = require('aws-sdk')
const {typeDefs, resolvers} = require('./graphql/index')

// const server = new ApolloServer({
//   typeDefs: typeDefs, 
//   resolvers: resolvers,
//   playground: {
//      endpoint: `http://localhost:4000/graphql`,
//      settings: {
//        'editor.theme': 'dark'
//      }
//    }
// })

  // const app = express();

  // server.applyMiddleware({ app });

  // app.listen({ port: 4000 }, () =>
  //   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  // );

AWS.config.update({region: 'us-east-1'});

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  playground: {
    endpoint: "/dev/graphql"
  }
});

exports.graphqlHandler = server.createHandler()
