const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const http = require("http");

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  subscriptions: {
    onConnect: () => console.log('Connected to websocket'),
  },
});

const app = express();
server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(4000, () => {
  console.log(`🚀 Server ready at http://localhost:${4000}${server.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${4000}${server.subscriptionsPath}`)
})