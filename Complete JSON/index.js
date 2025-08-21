//JSON does not support undefined, functions, or symbols.
//JSON does not supports comments.
//Json does not supports NaN, Infinity, or -Infinity.
//JSOn does not supports Single quotes, it only supports double quotes for strings.
//JSOn does not support Trailing commas in objects or arrays.
//we can acces the properties of an object using both dot notation and bracket notation.

let obj = {
  name: "Aarav",
  age: undefined, //this will be neglected in JSON.stringify
  isStudent: true,
  scores: [95, undefined, 88], //undefined will converted to null in JSON.stringify
  address: {
    city: "Delhi",
    pin: null,
  },
  greet: function () {
    //function will be neglected in JSON.stringify
    return "Hello";
  },
};

let str = JSON.stringify(obj);
console.log(str); //{"name":"Aarav","isStudent":true,"scores":[95,null,88],"address":{"city":"Delhi","pin":null}}
console.log(obj.name); //Aarav
console.log(obj["age"]); //undefined
console.log(obj.address["city"]); //Delhi
console.log(obj.scores[2]); //88
console.log(obj.scores[1]); //undefined
console.log(typeof obj); //object
console.log(typeof str); //string
console.log(obj.greet()); //TypeError: obj.greet is not a function

//Merge two Json objects

let obj1 = {
  name: "kunal",
  age: 25,
  isStudent: false,
  scores: [85, 90],
  address: {
    city: "Mumbai",
    pin: 400001,
  },
};

let obj2 = {
  name: "Satyam",
  age: 30,
  isStudent: true,
  scores: [95, 100],
  address: {
    city: "Bangalore",
    pin: 560001,
  },
};

//1st way to merge two objects
let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); //{ name: 'Satyam', age: 30, isStudent: true, scores: [ 95, 100 ], address: { city: 'Bangalore', pin: 560001 } }

//2nd way to merge two objects
let mergedObj2 = Object.assign({}, obj1, obj2);
console.log(mergedObj2); //{ name: 'Satyam', age: 30, isStudent: true, scores: [ 95, 100 ], address: { city: 'Bangalore', pin: 560001 } }
