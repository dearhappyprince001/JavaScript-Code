// This is a library file that exports variables, functions, and classes.

export let message = "ES6 version modules"; //variable.

//function.
export function hello() {
  console.log("hi i m in a function");
}

//class.
export class user {
  constructor() {
    console.log("Constructor");
  }
}

//or we want to print all variables,function,and class also so we have a short-hand Notation.

//export { message, hello, user };
