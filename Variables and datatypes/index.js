// var

var age = 22;
if (true) {
  console.log(age);
}

function solve() {
  var age = 22;
  console.log(age);
}
solve();
console.log(age);

var x = 10;
var x = 20;
console.log(x);

//    let

{
  let a = 10;
  console.log(a);
}

//   const

const a = 20;
console.log(a);

// const a=50;
// console.log(a);

const pi = 3.14159265359;
const radius = 4;
console.log(pi * radius * radius);

// Datatypes.

let nameOfStudent = "happy";
console.log(nameOfStudent); //string.

let number = 12.5;
console.log(number); //number.

let string = "prince";
console.log(string); //string.

let boolean = true;
console.log(boolean); //boolean.

let age;
console.log(age); //undefined.

let marks = null;
console.log(marks); //null.

//Arithmetic calculation in myntra bag.
let bagPrice = 15599 - (10 / 100) * 15599 - 272;
let jeansPrice = 2499 - (41 / 100) * 2499 - 29;
let bagValue = Math.round(((bagPrice + jeansPrice + 25 + 20) * 118) / 100);
let bagSummary = `Your final Myntra Bag $ {bagValue}`;
console.log(bagSummary);

//console.table()Method.

accountEmail = "abc@gmail.com";
accountPassword = "213432";
accountCity = "Delhi";

console.table([accountEmail, accountPassword, accountCity]); //is method se sabhi ko ek sath table ki form mein access kar sakte hai.
