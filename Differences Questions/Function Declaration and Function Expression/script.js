//------->1.Function Declaration .
//A function declaration defines a named function by using function keyword and function declaration is hoisted.

console.log(add(2, 2)); //4 hoisted are allowed .
function add(a, b) {
  return a + b;
}
console.log(add(5, 5)); //10

//------>2.Function Expression.
//A function expression defines a function and assigns it to a variable and it is not hoisted.

//console.log(multiply(3, 3));//Reference Error.
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(2, 3)); //6.
