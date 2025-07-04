// var ----------> it is a function scope variable.

var age = 22;
if (true) {
  console.log(age); // 22
}

// var is function scoped, meaning it is accessible within the function it is declared in, or globally if declared outside any function.
function solve() {
  var age = 22;
  console.log(age); // 22
}
solve(); // 22
console.log(age); // 22

var x = 10;
var x = 20; // re-declaring a variable with var is allowed
x = 30; // re-assigning a variable with var is allowed
console.log(x); // 30
console.log(x); //

// let ---------->it is a block scope variable

{
  let a = 10;
  console.log(a); // 10

  a = 20; // re-assigning a variable with let is allowed
  console.log(a); // 20

  // let a = 30; // re-declaring a variable with let is not allowed, it will throw an error
  // console.log(a); // 30
}

//console.log(a); // ReferenceError: a is not defined, because 'a' is block scoped and not accessible outside the block

// const---------->it also is a block scope variable but it is immutable, meaning we cannot change its value after declaration.

const a = 20;
console.log(a);

// const a=50;// re-declaring a variable with const is not allowed, it will throw an error
// console.log(a);

// const a = 30; // re-assigning a variable with const is not allowed, it will throw an error
// console.log(a);

const pi = 3.14159265359;
const radius = 4;
console.log(pi * radius * radius);

//-----------------------> Datatypes.

let nameOfStudent = "happy";
console.log(nameOfStudent); //happy
console.log(typeof nameOfStudent); //string
console.log("\n");

let number = 12.5;
console.log(number); //12.5
console.log(typeof number); //number
console.log("\n");

let string = "prince";
console.log(string); //prince
console.log(typeof string); //string
console.log("\n");

let boolean = true;
console.log(boolean); //true
console.log(typeof boolean); //boolean
console.log("\n");

let age;
console.log(age); //undefined.
console.log(typeof age); //undefined
console.log("\n");

let marks = null;
console.log(marks); //null.
console.log(typeof marks); //object
console.log("\n");

let no = "A" - 1;
console.log(no); //NaN
console.log(typeof no); //number
console.log("\n");

//Arithmetic calculation in myntra bag.
let bagPrice = 15599 - (10 / 100) * 15599 - 272;
let jeansPrice = 2499 - (41 / 100) * 2499 - 29;
let bagValue = Math.round(((bagPrice + jeansPrice + 25 + 20) * 118) / 100);
let bagSummary = `Your final Myntra Bag $ {bagValue}`;
console.log(bagSummary);

//console.table()Method .

accountEmail = "abc@gmail.com";
accountPassword = "213432";
accountCity = "Delhi";

console.table([accountEmail, accountPassword, accountCity]); //is method se sabhi ko ek sath table ki form mein access kar sakte hai with index no.
