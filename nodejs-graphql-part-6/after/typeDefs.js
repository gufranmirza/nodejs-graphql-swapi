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

  type AuthPayLoad {
    token: String!
    email: String!
  }

  type Mutation {
    createPerson(id: Int!, name: String!, gender: String!, height: Int!, mass: Int!, homeworld: String!): Person
    updatePerson(id: Int!, name: String!, gender: String!, height: Int!, mass: Int!, homeworld: String!): Person
    deletePerson(id: Int!): String

    createToken(email: String!, password: String!) : AuthPayLoad!
    verifyToken(token: String!): AuthPayLoad!
  }
`;


module.exports = typeDefs;