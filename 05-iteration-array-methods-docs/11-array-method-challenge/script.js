// Take the `people` array and create an array called `youngPeople` that stores objects with ONLY `name` and `email` properties of all the people that are 25 and under. The `name` property should have their first and last name.

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

// CHALLENGE 1

const youngPeopleFilter = people.filter(function (person) {
    return person.age <= 25;
})

const youngPeople = youngPeopleFilter.map(function (person) {
    return {
        name: `${person.firstName} ${person.lastName}`,
        email: person.email,
    }
})

console.log(youngPeople);

// **Instructions:**

// Add all of the positive numbers in the array.

// **Expected Result:**

// ```JavaScript

// const numbers = [2, -30, 50, 20, -12, -9, 7];

// console.log(positiveSum); // 79

// ```


// CHALLENGE 2
const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
    .filter(function (num) {
        return num >= 0;
    })
    .reduce(function (acc, curr) {
    return acc += curr;
}, 0);

console.log(positiveSum);


// CHALLENGE #3

const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map(function (word) {
    return word[0].toUpperCase() + word.slice(1, word.length);
})

console.log(capitalizedWords);