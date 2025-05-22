//------------------------------->functions.
//function is a block of code that performs a specific task.
//function is a reusable piece of code that can be called multiple times.

function sayMyName() {
  //define a function or function definition.
  console.log("Dear happy prince");
  console.log("I am learning java script");
}
//sayMyName;//agar aaise call krenge toh ye function ka reference hai ye kuch print nhi krega.

sayMyName(); //function-call.
sayMyName(); //function-call -----> it calls the function two times of the code in function.
// sayMyName();
// sayMyName();
// sayMyName();

//------------------------------------>function with parameters.

let age = 22; //global variable.
function printAge() {
  console.log(age); //it will print 22 because it is a global variable and we can access it outside the function also.
}

printAge(); // //it will print 22 because it is a global variable and we can access it outside the function also.

age = 71;
printAge(); // //it will print 71 because it is a global variable and we can access it outside the function also.

age = 32;
printAge(); // //it will print 32 because it is a global variable and we can access it outside the function also.

//------------------------------>function with parameters.
function printCounting() {
  //define a function or function definition.
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
printCounting(); //call a function.
// printCounting();

//------------------------------->function with parameters.
function loginUserMessage(userName) {
  return `${userName} just logged in`;
}
let storingValue = loginUserMessage("happyPrince"); // //function call.
console.log(storingValue);

//----------------------------------->spread-operator.
//spread operator is used to pass multiple arguments to a function.
function calculateCartPrice(...num1) {
  return num1;
}
//console.log(calculateCartPrice(200)); // 200 it will work.
console.log(calculateCartPrice(300, 400, 500, 500, 700)); //but it will print only first value this problem is resolving by spread operator.

//----------------------->function with object.

const anyObject = {
  userName: "prince",
  price: 200,
};

function handleObject(anyObject) {
  console.log(
    `User-Name is ${anyObject.userName} and price is ${anyObject.price}`
  );
}
handleObject(anyObject); //function call.
console.log(anyObject);

//---------------------->function with array.

const getArray = [2000, 3000, 4000];

function returnSecondVAlue(getArray) {
  return getArray[1];
}
console.log(returnSecondVAlue(getArray));

function myFunction(msg) {
  //parameters.
  console.log(msg);
}
// myFunction();  //it shows undefined because we did not pass any argument in this.

myFunction("hello i m learning JS"); //call a function.

//--------------------->create a function of sum of 2 numbers.

function sum(x, y) {
  //parameters.
  //x, y are the local variables.
  //console.log(x); //because x is a local variable ,so its only used in function block scope .
  // console.log(y); //because y is a local variable ,so its only used in function block scope .
  let s = x + y;
  return s;
}
let val = sum(3, 4); //arguments.
// console.log(x); // because x is a local variable,it is used only in function block not outside the block or function.
// console.log(y); // because y is a local variable,it is used only in function block not outside the block or function.
console.log(val);

function printNumber(num) {
  //function definition with parameter.
  console.log("Printing No :", num);
}
printNumber(5); //call a function. ----->arguments.

//---------------------->Return--Function.

function getSum(a, b, c) {
  let sum = a + b + c;
  return sum;
  //unreachable-statement<---->if we write something after the return.
}
let ans = getSum(1, 2, 3);
console.log("Printing sum: ", ans);

function getName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return fullName;
  //unreachable-statement.
}
let fullName = getName("dear", "Prince");
console.log("full Name: ", fullName);

//-------------->Arrow Functions is nothing but the shortest notation to write a function.

const arrFunction = () => {
  //using without parameters.
  console.log("hello we are learning about Arrow Function");
};
arrFunction(); //call a function.

//arrow function by implicit method mein return ko nhi likhte hai.
const addNumber = (num1, num2) => num1 + num2;
console.log(addNumber(10, 20));

const arrowFunction = (a, b) => {
  //using with parameters.
  console.log(a + b);
};
arrowFunction(5, 5); //call a function.

//----------------->arrow function in array with each Method in array.

let arr = [1, 2, 3, 4, 5];

arr.forEach((val) => {
  //val=call back function.
  console.log(val);
});

let arr2 = ["happy", "sam", "ronak", "ankush"];

arr2.forEach((val, index, arr2) => {
  //we can add three optional parameters in call back function -----value,index,array-itself.
  console.log(val, index, arr2);
});

//-------------------------------------->reduce method.

let arr3 = [1, 2, 3, 4];
const output = arr3.reduce((acc, curr) => {
  //acc=previous value,curr=current value.
  return acc + curr;
});
console.log(output); //10

//---------------------->function sequence.

function myFirst() {
  console.log("hello");
}

function mySecond() {
  console.log("kaise ho jee");
}
mySecond();
myFirst();

//------------------------------>setTimeOut and setInterval method

function hello() {
  console.log("hello guys");
}
//setTimeout and setInterval are used to execute a function after a certain amount of time.
//setTimeout is used to execute a function after a certain amount of time.
setTimeout(hello, 1000); //ye function ko 1 second ke badd chla dega.
//setInterval is used to execute a function repeatedly after a certain amount of time.
setInterval(hello, 1000); //ye function ko har 1 second ke bad chla degga.
