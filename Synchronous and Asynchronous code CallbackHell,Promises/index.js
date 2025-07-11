//Synchronous-code.
//execution of code is done line by line, one after another.
console.log("one"); //first-instruction
console.log("two"); //second-instruction
console.log("three"); //third-instruction
console.log("four"); //fourth-instruction
console.log("five"); //fifth-instruction
console.log("six"); //sixth-instruction

//Asynchronous-code.
//execution of code is done in parallel, not line by line.

console.log("one");
console.log("two");

function hello() {
  console.log("hello");
}
setTimeout(hello, 5000); //2s = 2000 ms,it takes time to print the result.

console.log("three");
console.log("four");

// //Output:
// //One
// //two
// //three
// //four
// //hello

// Callback--------> A callback is a function passed as an argument to another function.

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(1, 2, sum); //function contains another function which passes as an argument.

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

// //Callback-hell ------>(callback inside another callback) and it is difficult to understand and manage.

getData(1, () => {
  console.log("getting data2...");
  getData(2, () => {
    console.log("getting data3...");
    getData(3, () => {
      console.log("getting data4...");
      getData(4); //4th data.
    });
  });
});

//Promises.

let promise = new Promise((resolve, reject) => {
  console.log("I m a promise");
  // resolve("success");  //it is a function.
  // reject("some error occured");  //it is also a function.
});

//promises used in real life
function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}
