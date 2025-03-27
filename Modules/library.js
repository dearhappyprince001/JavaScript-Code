export let message = "ES6 version modules"; //variable.

export function hello() {
  //function.
  console.log("hi i m in a function");
}

export class user {
  constructor() {
    console.log("Constructor");
  }
}

//or we want to print all variables,function,and class also so we have a short-hand Notation.

//export { message, hello, user };
