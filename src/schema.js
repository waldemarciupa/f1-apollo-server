const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get races array"
    races: [Race!]!
  }

  type Race {
    id: ID!
    "The race's season"
    season: String!
    "The race's round"
    round: String!
    "The race's name"
    name: String!
    "The race's location"
    location: String!
    "The race's country"
    country: String!
    "The race's official formula1 url"
    url: String!
    "The race's sessions"
    sessions: Session!
  }

  "The race's session"
  type Session {
    fp1: String!
    fp2: String!
    fp3: String!
    qualifying: String!
    gp: String!
  }
`;

module.exports = typeDefs;
