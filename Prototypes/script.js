//----------------->Prototypes
// Prototypes are a way to add new properties and methods to existing objects in JavaScript.

const obj = {
  name: "suraj",
};
console.log(obj); // { name: 'suraj' }

const obj1 = {
  age: 23,
  __proto__: obj, // Inherit properties from obj
};
//console.log(obj1.name); //undefined, because obj1 does not have a name property.
console.log(obj1.name); // 'suraj', because obj1 inherits the name property from obj.
console.log(obj1); // { age: 23, __proto__: { name: 'suraj' } }
