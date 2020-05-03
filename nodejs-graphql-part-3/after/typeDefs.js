const { gql } = require('apollo-server-express');


// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Person {
    id: Int!
    name: String!
    gender: String!
    height: Int!
    mass: Int!
    homeworld: String!
  }

  type Query {
    person(id: Int!): Person
    allPeople: [Person]
  }
`;


module.exports = typeDefs;