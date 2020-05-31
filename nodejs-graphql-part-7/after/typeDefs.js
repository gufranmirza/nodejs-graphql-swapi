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

  type Mutation {
    createPerson(id: Int!, name: String!, gender: String!, height: Int!, mass: Int!, homeworld: String!): Person
    updatePerson(id: Int!, name: String!, gender: String!, height: Int!, mass: Int!, homeworld: String!): Person
    deletePerson(id: Int!): String
  }

  type Subscription {
    newPerson: Person
  }
`;


module.exports = typeDefs;