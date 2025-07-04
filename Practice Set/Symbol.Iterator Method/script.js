let x = ["Apple", "Orange", "Grapes", "WaterMellon"];

// Get the iterator object from the array
let y = x[Symbol.iterator]();

// Get the first value from the iterator
let firstValue = y.next().value;
console.log(firstValue); // Output: Apple
// Get the second value from the iterator
let secondValue = y.next().value;
console.log(secondValue); // Output: Orange
// Get the third value from the iterator
let thirdValue = y.next().value;
console.log(thirdValue); // Output: Grapes
// Get the fourth value from the iterator
let fourthValue = y.next().value;
console.log(fourthValue); // Output: WaterMellon
