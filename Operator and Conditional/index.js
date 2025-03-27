let a = 20;
let b = 10;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); //Multiplication
console.log(a / b); // Division ---->It provides Quotient.
console.log(a % b); // Modulus ----->It provides Reminder.
console.log(a ** b); //Power ----->It provides Power.

let c = 5;
c = c + 10;
console.log(c);

let d = 5;
d = d - 10;
console.log(d);

let e = 5;
e = e * 10;
console.log(e);

let f = 5;
f = f / 10;
console.log(f);

//Ternary-operator.

let age = 25;
let check =
  age > 18 ? "i can vote for this year" : "i can not vote for this year";
console.log(check); //ternary-operator.

//logical-Operator.

let and = true && true && false;

console.log(and); //And-operator.

let or = true || false || false;

console.log(or); //Or-operator.

let not = !false;

console.log(not); //Not-operator.

let num = 4;

switch (
  num //switch-case.
) {
  case 1:
    console.log("A");
    break;

  case 2:
    console.log("B");
    break;

  case 3:
    console.log("C");
    break;

  case 4:
    console.log("D");
    break;

  case 5:
    console.log("E");
    break;

  default:
    console.log("F");
}

//unary-operator.

let a = 5;
console.log(a++); //post increment.

let b = 6;
console.log(--b); //pre decrement

// Guard-Operator.

let age;
let result = age || 18;
console.log(age);
console.log(result);
