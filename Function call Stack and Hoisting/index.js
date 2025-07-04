//Hosting is of two types.
//hoisting is a javaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.

//------------------->Function-Hoisting.

function sayMyName(finalName) {
  console.log(finalName);
}
sayMyName("dear happy prince"); //normal-function call.

//function-Hoisting
sayMyName("Suraj Kumar"); //suraj kumar.
function sayMyName(finalName) {
  console.log(finalName);
}

console.log(addOne(5)); //6
function addOne(num) {
  return num + 1;
}

//but agar hum function ko kisi variable mein store kra kr hoisting krte hai toh error aayega.

addTwo(5); //reference error
const addTwo = function (num) {
  return num + 2;
};

//------------------>with arrow function.

test(); //reference error
const test = () => {
  console.log("using arrow function for hoisting");
};

//---------------->Variable-Hosting is only possible with var keyword not with let and const.

//if we use let and const then it will show reference error.
//var is hoisted and initialized with undefined.
//let and const are hoisted but not initialized, so they throw a reference error if accessed before declaration.

var age = 22;
console.log(age); //22 normal var-keyword variable.

console.log(age); //but showing undefined
var age = 22;

console.log(age); //showing reference error.
let age = 21;

// console.log(age); //also showing reference error.
// const age = 33;

// //-------------------->class-level-hosting.
//class decleration is not hoisted.
// const Object1 = new Human(); //class level hoisting is not allowed it will create error.
// class Human {}
