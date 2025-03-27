//Hosting is of two types.

//------------------->Function-Hoisting.

function sayMyName(finalName) {
  console.log(finalName);
}
sayMyName("dear happy prince"); //normal-function call.

sayMyName("dear happy prince"); //function-Hoisting.

function sayMyName(finalName) {
  console.log(finalName);
}

//---------------->Variable-Hosting is only possible with var keyword not with let and const.

var age = 22;
console.log(age); //20 normal var-keyword variable.

console.log(age); //variable-hoisting.
var age = 22; //but showing undefined.

console.log(age); //showing reference error.
let age = 21;

console.log(age); //also showing reference error.
const age = 33;

//-------------------->class-level-hosting.

const Object1 = new Human(); //class level hoisting is not allowed it will create error.
class Human {}
