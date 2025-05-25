//--------------------->Currying Function ---> A function that takes three arguments and returns their sum

//--------->normal function
function add(a, b, c) {
  return a + b + c;
}
let result = add(1, 2, 3);
console.log(result); // Output: 6

//--------->Currying function
function addition(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// let result1 = addition(1);
// console.log(result1); // Output: function

// let data1 = result2(2); // Call the returned function with the second argument
// console.log(data1); // Output: function

// let data2 = data(3); // Call the returned function with the third argument
// console.log(data2); // Output: 6

// Using currying to achieve the same result
let result2 = addition(1)(2)(3); // Call the curried function with all three arguments
console.log(result2); // Output: 6

// A function that takes two arguments and returns their product
function multiply(x) {
  return function (y) {
    return x * y;
  };
}
console.log(multiply(4)(5)); // Output: 20

//-------------->Infinite Currying--->// A function that takes a number and returns a function that takes another number

//problem: The above currying function does not allow for infinite currying, meaning it cannot be called repeatedly without providing all arguments at once.
function addition(a) {
  return function (b) {
    return function (c) {
      return addition(a + b + c); // Return a new function that continues the currying
    };
  };
}
console.log(addition(1)(2)(3)()); // Output: 6

// Example of infinite currying
function addition(a) {
  return function (b) {
    if (b === undefined) {
      return a; // If no argument is provided, return the accumulated sum
    }
    return addition(a + b); // Continue currying with the new sum
  };
}

console.log(addition(1)(2)(3)()); // Output: 6
console.log(addition(1)(2)(3)(4)(8)()); // Output: 18
console.log(addition(5)(10)(20)(23)(30)()); // Output: 88
