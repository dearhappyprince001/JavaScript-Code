//----------------->Symbol.iterator()

//used with array.
let x = ["Apple", "Orange", "Grapes", "WaterMellon"];

// Get the iterator object from the array
let y = x[Symbol.iterator]();

// Get the first value from the iterator
let firstValue = y.next();
console.log(firstValue); // Output: Apple
// Get the second value from the iterator
let secondValue = y.next();
console.log(secondValue); // Output: Orange
// Get the third value from the iterator
let thirdValue = y.next();
console.log(thirdValue); // Output: Grapes
// Get the fourth value from the iterator
let fourthValue = y.next();
console.log(fourthValue); // Output: WaterMellon
// Get the fifth value from the iterator
let fifthValue = y.next();
console.log(fifthValue); // Output: { value: undefined, done: true }

//used with string.
let str = "Hello";

// Get the iterator object from the string
let strIterator = str[Symbol.iterator]();

// Get the first character from the iterator
let firstChar = strIterator.next();
console.log(firstChar); // Output: { value: 'H', done: false }
// Get the second character from the iterator
let secondChar = strIterator.next();
console.log(secondChar); // Output: { value: 'e', done: false }
// Get the third character from the iterator
let thirdChar = strIterator.next();
console.log(thirdChar); // Output: { value: 'l', done: false }
// Get the fourth character from the iterator
let fourthChar = strIterator.next();
console.log(fourthChar); // Output: { value: 'l', done: false }
// Get the fifth character from the iterator
let fifthChar = strIterator.next();
console.log(fifthChar); // Output: { value: 'o', done: false }
// Get the sixth character from the iterator
let sixthChar = strIterator.next();
console.log(sixthChar); // Output: { value: undefined, done: true }
// Get the seventh character from the iterator
let seventhChar = strIterator.next();
console.log(seventhChar); // Output: { value: undefined, done: true }
