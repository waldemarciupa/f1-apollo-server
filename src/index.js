const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const races = [
  {
    id: 'bahrain-grand-prix',
    season: '2022',
    round: '1',
    name: 'Bahrain Grand Prix',
    location: 'Sakhir',
    country: 'Bahrain',
    url: 'https://www.formula1.com/en/racing/2022/Bahrain.html',
    sessions: {
      fp1: '2022-03-18T12:00:00Z',
      fp2: '2022-03-18T15:00:00Z',
      fp3: '2022-03-19T12:00:00Z',
      qualifying: '2022-03-19T15:00:00Z',
      gp: '2022-03-20T15:00:00Z',
    },
  },
];

const resolvers = {
  Query: {
    races: () => races,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
`);
});
