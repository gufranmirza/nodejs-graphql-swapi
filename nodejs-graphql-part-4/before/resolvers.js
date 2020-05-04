const Persons = [
  {
      "name": "Luke Skywalker",
      "gender": "male",
      "height": "172",
      "mass": "77",
      "homeworld": "Tatooine",
      "id": 1
  },
  {
      "id": 2,
      "name": "C-3PO",
      "gender": "n/a",
      "height": "167",
      "mass": "75",
      "homeworld": "Tatooine"
  },
  {
      "id": 3,
      "name": "R2-D2",
      "gender": "n/a",
      "height": "96",
      "mass": "32",
      "homeworld": "Naboo"
  },
  {
      "id": 4,
      "name": "Darth Vader",
      "gender": "male",
      "height": "202",
      "mass": "136",
      "homeworld": "Tatooine"
  },
  {
      "id": 5,
      "name": "Leia Organa",
      "gender": "female",
      "height": "150",
      "mass": "49",
      "homeworld": "Alderaan"
  }
];

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
      async person(parent, args, ) {
        const id = args.id
        return Persons.find(person => person.id === id)
      },

      async allPeople(parent, args) {
        return Persons;
      },
    },
};

module.exports = resolvers;