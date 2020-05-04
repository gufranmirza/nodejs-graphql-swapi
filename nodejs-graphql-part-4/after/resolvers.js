let Persons = [
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
      async person(parent, args ) {
        const id = args.id
        return Persons.find(person => person.id === id)
      },

      async allPeople(parent, args) {
        return Persons;
      },
    },

    Mutation: {
      async createPerson(parent, args ) {
        const newPerson = {
          id: args.id,
          name: args.name,
          gender: args.gender,
          height: args.height,
          mass: args.mass,
          homeworld: args.homeworld
        };
    
        Persons.push(newPerson);

        return newPerson;
      },
      async updatePerson(parent, args ) {
        const newPerson = {
          id : args.id,
          name: args.name,
          gender: args.gender,
          height: args.height,
          mass: args.mass,
          homeworld: args.homeworld
        };

        for( let i=0; i< Persons.length; i++) {
          if (Persons[i].id === args.id) {
            Persons[i] = newPerson;
          }
        }
        return newPerson;
      },
      async deletePerson(parent, args ) {
        const id = args.id;
        Persons = Persons.filter((person) => {
          return person.id !== id;
        });
        return `Person with id ${id} has been deleted`;
      },
    }
};

module.exports = resolvers;