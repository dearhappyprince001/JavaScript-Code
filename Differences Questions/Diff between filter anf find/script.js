//filter()Methods.
//It returns a new array of all the elements that satisfy the given conditions.

//find()Methods.
//It is used to find the first elements of an array that satisfy the given conditions otherwise it return undefined.

const users = [
  { id: 1, name: "Aman", age: 18 },
  { id: 2, name: "Vikky", age: 22 },
  { id: 3, name: "Suraj", age: 25 },
  { id: 4, name: "Dixit", age: 22 },
];

//using filter()---> returns all users with age 22.
const filteredArray = users.filter((user) => user.age === 22);
console.log(filteredArray);
//  [ { id: 2, name: 'Vikky', age: 22 },
//   { id: 4, name: 'Dixit', age: 22 }
// ]

//using find()---> returns only the first user with age 22.
const newArray = users.find((user) => user.age === 22);
console.log(newArray); //{ id: 2, name: 'Vikky', age: 22 }
