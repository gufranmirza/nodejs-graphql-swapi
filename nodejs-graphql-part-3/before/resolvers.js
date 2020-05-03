// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
      hello: () => 'world!',
    },
};

module.exports = resolvers;