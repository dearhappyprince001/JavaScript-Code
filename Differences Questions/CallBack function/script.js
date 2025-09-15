//Callback Function is a function that is passed as an argument to another function and is executed after some operation is completed.

function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

//sayGoodbye is a callback function it is passed to into greet as an arguments.
function sayGoodbye() {
  console.log("Goodbye");
}

greet("John", sayGoodbye); //Hello, John
//Goodbye
