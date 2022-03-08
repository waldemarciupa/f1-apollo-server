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
    "The race's official formula1 url"
    url: String!
    "The race's circuit"
    circuit: Circuit!
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

  "The circuit"
  type Circuit {
    "The ciruit's id"
    id: String!
    "The ciruit's location"
    location: String!
    "The ciruit's country"
    country: String!
    "The firtst grand prix at this circuit"
    firstGrandPrix: String!
    "The ciruit's number of laps"
    numberOfLaps: String!
    "The ciruit's length"
    circuitLength: String!
    "The ciruit's distance"
    raceDistance: String!
  }
`;

module.exports = typeDefs;
