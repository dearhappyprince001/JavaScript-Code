function call() {
  console.log("database connected");
}
call(); //its a normal function.

// global scope ke pollution se problem hoti hai toh jo global scope ke variable hai ya /jo bhi declaration hai uske pollution ko hatane ke liye use karte hai.They are typically used to create a local scope for variables to prevent them from polluting the global scope.

//IIFE function is used to prevent global scope pollution.

//Syntax:
(function call() {
  console.log("database connected second time");
})(); //by using () and function inside () then function calls immediately.

//using with arrow function.

(() => {
  console.log("database connected Third time");
})();

//with variable property.

((name) => {
  console.log(`database connected fourth timewith ${name}`);
})("happyPrince");
