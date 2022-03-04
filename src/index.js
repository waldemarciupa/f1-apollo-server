const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const typeDefs = require('./schema');

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    races: async (parent, args, context) => {
      return context.prisma.race.findMany({
        include: {
          sessions: true,
        },
      });
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
  },
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
`);
});
