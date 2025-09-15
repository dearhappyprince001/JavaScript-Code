//exec() vs test() in JavaScript
//Both belong to the RegExp object, but they behave differently.

//Test() Method checks if a match exists in a string or not if no match found it will return false.
const regex = /hello/;
console.log(regex.test("hello world")); // true
console.log(regex.test("hi there")); // false

//exec() Method Executes a search for a match in a string.Returns an array with details about the match (matched string, index, input, groups) and if no match found it will return null.
const regexx = /hello/;
console.log(regexx.exec("hello world"));
// [ 'hello', index: 0, input: 'hello world', groups: undefined ]

console.log(regexx.exec("hi there")); // null
