//This is the main.js file where we will import variables, functions, and classes from library.js.

import { message } from "./library.js";
console.log(message);

import { hello } from "./library.js";
hello();

import { user } from "./library.js";

//let obj = new user(); //print object.

//------------->Or
// This is a library file that exports variables, functions, and classes.

import * as happy from "./library.js";
console.log(happy.message); //print variable.
console.log(happy.hello()); //print function.
console.log(new happy.user()); //print object.

//---------->or we want to print all variables,function,and class also so we have a short-hand Notation.

import { message, hello, user } from "./library.js";

console.log(message); //print variable.

hello(); //print function.

let obj = new user(); //print object.
