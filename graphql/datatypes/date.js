const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

exports.DateResolver  = {
    Date: new GraphQLScalarType({
      name: 'Date',
      description: 'Date custom scalar type',
      parseValue(value) {
        return new Date(value); // value from the client
      },
      serialize(value) {
        return Math.round(value.getTime() / 1000); // value sent to the client
      },
      parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
          return new Date(ast.value) // ast value is always in string format
        }
        return null;
      },
    }),
  };