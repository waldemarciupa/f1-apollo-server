const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get races array"
    races: [Race!]!
  }

  type Race {
    "The race id"
    id: ID!
    "The race season"
    season: String!
    "The race round"
    round: String!
    "The race name"
    name: String!
    "The race wikipedia url"
    url: String!
    "The race circuit"
    circuit: Circuit!
    "The race sessions"
    sessions: Session!
  }

  "The race session date and time"
  type Session {
    fp1: String!
    fp2: String!
    fp3: String!
    qualifying: String!
    gp: String!
  }

  "The circuit"
  type Circuit {
    "The ciruit id"
    id: String!
    "The circuit name"
    name: String!
    "The ciruit location"
    location: String!
    "The ciruit country"
    country: String!
    "The firtst grand prix at this circuit"
    firstGrandPrix: String!
    "The ciruit number of laps"
    numberOfLaps: String!
    "The ciruit length in kilometers"
    circuitLength: String!
    "The ciruit distance in kilometers"
    raceDistance: String!
    "The circuit wikipedia url"
    url: String!
  }
`;

module.exports = typeDefs;
