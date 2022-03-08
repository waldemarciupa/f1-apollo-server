const { ApolloServer } = require('apollo-server');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');
const { PrismaClient } = require('@prisma/client');
const typeDefs = require('./schema');

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    races: async (parent, args, context) => {
      return context.prisma.race.findMany({
        include: {
          sessions: true,
          circuit: true,
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
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
`);
});
