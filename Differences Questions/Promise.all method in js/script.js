//Promise.all() Method in javascript is used when multiple asynchronous operations runs concurrently and you want to wait for all of them to complete. It takes an array of promises and return a single Promise.

//Syntax
// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log(results); // array of resolved values
//   })
//   .catch((error) => {
//     console.log(error); // first rejected promise error
//   });

//Example:When All Promise Resolve.
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((error) => console.log(error));
//[10,20,30]

//Example2.When One Promise Fails.
const p4 = Promise.resolve("Success 1");
const p5 = Promise.reject("Failed");
const p6 = Promise.resolve("Success 3");

Promise.all([p4, p5, p6])
  .then((results) => console.log(results))
  .catch((error) => console.log("Error:", error));
//Failed
