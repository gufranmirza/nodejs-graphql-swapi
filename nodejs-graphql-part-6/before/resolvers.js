const {
  UserInputError 
} = require('apollo-server');

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
        person = Persons.find(person => person.id === id)
        if (person === null || this.person === undefined){
          throw new UserInputError('could not find any user with given id', {
            data: args
          });
        }
        return this.person
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
        let found = false; 
        let newPerson = {}     

        for( let i=0; i< Persons.length; i++) {
          if (Persons[i].id === args.id) {
            found = true;
            newPerson = {
              id : args.id,
              name: args.name,
              gender: args.gender,
              height: args.height,
              mass: args.mass,
              homeworld: args.homeworld
            };
            Persons[i] = newPerson;
          }
        }

        if (!found){
          throw new UserInputError('could not find any user with given id', {
            data: args
          });
        }

        return newPerson;
      },
      async deletePerson(parent, args ) {
        const id = args.id
        let found = false       

        Persons = Persons.filter((person) => {
          if (person.id === id ) {
            found = true
          }
          return person.id !== id;
        });

        if (!found){
          throw new UserInputError('could not find any user with given id', {
            data: args
          });
        }

        return `Person with id ${id} has been deleted`;
      },
    }
};

module.exports = resolvers;