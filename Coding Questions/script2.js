// // 1.sort an array in ascending order
// function sortArrayAscending(array) {
//   return array.sort((a, b) => a - b);
// }
// console.log(sortArrayAscending([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]

// // 2.sort an array in descending order
// function sortArrayDescending(array) {
//   return array.sort((a, b) => b - a);
// }
// console.log(sortArrayDescending([5, 6, 2, 1, 3, 4])); // Output: [6, 5, 4, 3, 2, 1]

// // 3.program to merge two arrays
// // by using concat() method
// function mergeArray(array1, array2) {
//   return array1.concat(array2);
// }
// console.log(mergeArray([1, 2, 3, 4, 5], [5, 6, 7, 8, 9, 10])); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// //by using spread operator
// function mergeSpreadArray(array1, array2) {
//   return [...array1, ...array2];
// }
// console.log(mergeSpreadArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // 4.program to find common elements in two arrays
// function findCommonElements(array1, array2) {
//   return array1.filter((value) => array2.includes(value));
// }
// console.log(findCommonElements([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])); // Output: [4, 5]

// // 5.Remove duplicates from an array
// function removeDuplicates(array) {
//   return [...new Set(array)];
// }
// console.log(removeDuplicates([1, 2, 3, 3, 4, 2, 4, 5, 1, 2, 3])); // Output: [1, 2, 3, 4, 5]

// // 6.program to sort an array of string in alphabetical order
// function sortStringArray(array) {
//   return array.sort();
// }
// console.log(sortStringArray(["banana", "apple", "orange", "kiwi"])); // Output: ['apple', 'banana', 'kiwi', 'orange']

// // 7.program to check if an array is empty or not
// function isArrayEmpty(array) {
//   return array.length === 0;
// }
// console.log(isArrayEmpty([])); // Output: true
// console.log(isArrayEmpty([1, 2, 3])); // Output: false

// // 8.program to check if an array is sorted
// function isArraySorted(array) {
//   return array.every(
//     (value, index) => index === 0 || value >= array[index - 1]
//   );
// }
// console.log(isArraySorted([1, 2, 3, 4, 5])); // Output: true
// console.log(isArraySorted([5, 4, 3, 2, 1])); // Output: false

// // 9.program to find the largest number in an array
// function findLargestNumber(array) {
//   return Math.max(...array);
// }
// console.log(findLargestNumber([1, 2, 3, 4, 5])); // Output: 5

// // 10.program to find the smallest number in an array
// function findSmallestNumber(array) {
//   return Math.min(...array);
// }
// console.log(findSmallestNumber([1, 2, 3, 4, 5])); // Output: 1

// // 11.union of two arrays
// function union(array1, array2) {
//   return [...new Set([...array1, ...array2])];
// }
// console.log(union([1, 2, 3], [3, 4, 5])); // Output: [1, 2, 3, 4, 5] remove duplicates.

// // 12.program to find the sum of all numbers in an array
// function findSum(array) {
//   return array.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );
// }
// console.log(findSum([1, 2, 3, 4, 5])); // Output: 15

// // 13.program to find the average of all numbers in an array
// function findAverage(array) {
//   return findSum(array) / array.length;
// }
// console.log(findAverage([1, 2, 3, 4, 5])); // Output: 3

// //---------------------------------------------> String Related Questions

// //program to reverse a string
// function reverseString(string) {
//   return string.split("").reverse().join(""); //The split("") method splits the string into an array of characters.The reverse() method reverses the order of the array elements.The join("") method joins the array back into a string, with no spaces in between.
// }
// console.log(reverseString("hello")); // Output: "olleh"

// //remove duplicates from a string
// function removeDuplicatesFromString(string) {
//   return [...new Set(string)].join("");
// }
// console.log(removeDuplicatesFromString("hello world")); // Output: "helo wrd"

// //program to check if a string is a palindrome
// function isPalindrome(string) {
//   const reversedString = reverseString(string);
//   return string === reversedString;
// }
// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false

// //check if a string contains another string
// function containsString(string, substring) {
//   return string.includes(substring);
// }
// console.log(containsString("hello world", "world")); // Output: true
// console.log(containsString("hello world", "worlds")); // Output: false

// //find longest word in a string
// function findLongestWord(string) {
//   const words = string.split(" ");
//   return words.reduce((longest, current) =>
//     current.length > longest.length ? current : longest
//   );
// }
// console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "quick"

// //count no of vowels in a string
// function countVowels(string) {
//   const vowels = "aeiouAEIOU";
//   return string.split("").filter((char) => vowels.includes(char)).length;
// }
// console.log(countVowels("hello world")); // Output: 3
// console.log(countVowels("aeiou")); // Output: 5

// //repeat a string in given number of times
// function repeatString(string, times) {
//   return string.repeat(times);
// }
// console.log(repeatString("hello", 3)); // Output: "hellohellohello"

// //program to convert a string to uppercase
// function toUpperCase(string) {
//   return string.toUpperCase();
// }
// console.log(toUpperCase("hello world")); // Output: "HELLO WORLD"

// //program to convert a string to lowercase
// function toLowerCase(string) {
//   return string.toLowerCase();
// }
// console.log(toLowerCase("HELLO WORLD")); // Output: "hello world"

// //calculate the power of a number
// function calculatePower(base, exponent) {
//   return Math.pow(base, exponent);
// }
// console.log(calculatePower(2, 3)); // Output: 8
// console.log(calculatePower(3, 2)); // Output: 9

// //program to find the factorial of a number
// function factorial(number) {
//   if (number === 0 || number === 1) {
//     return 1;
//   }
//   return number * factorial(number - 1);
// }
// console.log(factorial(5)); // Output: 120
// console.log(factorial(0)); // Output: 1

// //convert celsius to fahrenheit
// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }
// console.log(celsiusToFahrenheit(0)); // Output: 32
// console.log(celsiusToFahrenheit(100)); // Output: 212

// //convert fahrenheit to celsius
// function fahrenheitToCelsius(fahrenheit) {
//   return ((fahrenheit - 32) * 5) / 9;
// }
// console.log(fahrenheitToCelsius(32)); // Output: 0
// console.log(fahrenheitToCelsius(212)); // Output: 100

// //-------------------------------->Object Related Questions

// //program to create an object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };
// console.log(person); // Output: { name: 'John', age: 30, city: 'New York' }

// //program to access object properties
// console.log(person.name); // Output: "John"
// console.log(person["age"]); // Output: 30

// //program to add a property to an object
// person.country = "USA";
// console.log(person); // Output: { name: 'John', age: 30, city: 'New York', country: 'USA' }

// //program to remove a property from an object
// delete person.city;
// console.log(person); // Output: { name: 'John', age: 30, country: 'USA' }

// //program to check if a property exists in an object
// function hasProperty(object, property) {
//   return object.hasOwnProperty(property);
// }
// console.log(hasProperty(person, "name")); // Output: true
// console.log(hasProperty(person, "city")); // Output: false

// //program to merge two objects
// const object1 = { a: 1, b: 2 };
// const object2 = { b: 3, c: 4 };
// const mergedObject = { ...object1, ...object2 };
// console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }

// //Program to check if an object is empty or not.
// function isEmpty(obj) {
//   return Object.keys(obj).length === 0;
// }
// console.log(isEmpty({})); //true
// console.log(isEmpty({ a: 1 })); //false

// //program to clone an object
// const clonedObject = { ...person };
// console.log(clonedObject); // Output: { name: 'John', age: 30, country: 'USA' }

// //count properties in an object.

// function countProperties(obj) {
//   return Object.keys(obj).length;
// }
// console.log(countProperties({ a: 1, b: 2, c: 3, d: 4 })); //4

// //program to iterate over an object
// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }
// // Output:
// // name: John
// // age: 30
// // country: USA

// //program to find the length of an object
// function objectLength(object) {
//   return Object.keys(object).length;
// }
// console.log(objectLength(person)); // Output: 3

// //program to check if an object is empty
// function isObjectEmpty(object) {
//   return Object.keys(object).length === 0;
// }
// console.log(isObjectEmpty({})); // Output: true
// console.log(isObjectEmpty({ a: 1 })); // Output: false

// //program to find the keys of an object
// function objectKeys(object) {
//   return Object.keys(object);
// }
// console.log(objectKeys(person)); // Output: ['name', 'age', 'country']

// //program to find the values of an object
// function objectValues(object) {
//   return Object.values(object);
// }
// console.log(objectValues(person)); // Output: ['John', 30, 'USA']

// //program to find the entries of an object
// function objectEntries(object) {
//   return Object.entries(object);
// }
// console.log(objectEntries(person)); // Output: [['name', 'John'], ['age', 30], ['country', 'USA']]

// //count the number of properties in an object
// function countProperties(object) {
//   return Object.keys(object).length;
// }
// console.log(countProperties(person)); // Output: 3
// console.log(countProperties({ a: 1, b: 2, c: 3 })); // Output: 3

// //----------------------------------------------->Type coresion Questions.

// //--------------------------------->
// let x = [20, 44, 1, 3].sort();
// console.log(x); //[ 1, 20, 3, 44 ]

// let y = [90, 56, 78, 23, 62].sort();
// console.log(y); //[ 23, 56, 62, 78, 90 ]

// //----------------------------------->
// console.log(!!""); //false.

// //----------------------------------->
// console.log(1 < 2 < 3); //true.
// console.log(5 < 8 > 2); //false.
// console.log(1 > 19 < 2); //true.

// //----------------------------------->
// // (function () {
// //   var a = (b = 3);
// // })();
// // console.log(typeof b); //number

// //----------------------------------->
// console.log([1, 2, 3] + [1, 3, 4]); //1,2,31,3,4
// console.log([12, 3, 4] + [5, 16, 7]); //12,3,45,16,7

// //----> in case of (-) it will provide NaN as output.
// console.log([1, 2, 3] - [1, 3, 4]); //NaN
// console.log([12, 3, 4] - [5, 16, 7]); //NaN

// //----------------------------------->
// console.log("A" - 1); //NaN
// console.log("A" + 1); //A1

// //----------------------------------->
// let array = [, , ,];
// console.log(array); //[undefined, undefined, undefined, undefined]
// console.log(array.length); //4
// console.log(typeof array); //object

// //----------------------------------->
// console.log(null > 0); //false
// console.log(null === 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// //----------------------------------->
// let name = "sanju";
// let sliced = name.slice(1, 4);
// console.log(sliced); //anj --------> Note last index not included.

// //Note: splice() method is not used with string, it can applicable only for arrays.
// // let fName = "Arpit";
// // let spliced = fName.splice(0, 2);
// // console.log(spliced);

// //----------------------------------->
// let user = {
//   name: "Ram",
//   profession: "Engineer",
// };

// Object.defineProperty(user, "age", {
//   value: 30,
//   writable: false,
//   enumerable: true,
//   configurable: true,
// });

// user.age = 50;
// console.log(user.age); //30

// //----------------------------------->
// const arr = [1, , 3];
// console.log(arr[1]); //undefined
// console.log(1 in arr); //false

// //----------------------------------->
// function add(a, b, c = 3) {}
// console.log(add.length); //2 ----->in this when we use length property on function then it will return the length before the first default value.

// //----------------------------------->
// let num = [1, 3, 5, 6, 9];
// console.log(Math.max(...num)); //9
// console.log(Math.max()); //-Infinity
// console.log(Math.min(...num)); //1
// console.log(Math.min()); //Infinite.

// //----------------------------------->
// const sym = Symbol("id");
// const obj = { [sym]: 123 };
// console.log(Object.keys(obj)); //[]
// console.log(Object.getOwnPropertySymbols(obj)); //[ Symbol(id) ]

// //----------------------------------->
// // let a = { x: 1 };
// // let b = { x: 2 };
// // let c = { x: 3 };
// // let d = { x: 4 };
// // let e = { x: 5 };
// // let arr = { a, b, c, d, e };

// // arr.forEach((obj) => (obj.x = obj.x * 2));
// // console.log(a.x, b.x, c.x, d.x, e.x);

// //----------------------------------->
// console.log(2 + 2); //4
// console.log(2 + "2"); //22
// console.log("2" + "2"); //22
// console.log(2 + 2 - 2); //2
// console.log("2" + "2" + "2"); //222
// console.log("2" + "2" - "2"); //20
// console.log(2 + +"2"); //4

// //----------------------------------->
// console.log(null == undefined); //true
// console.log(null === undefined); //false

// console.log(NaN == NaN); //false
// console.log(NaN === NaN); //false

// console.log(typeof null); //object
// console.log(typeof undefined); //undefined
// console.log(typeof NaN); //number

// console.log(+true); //1
// console.log(+""); //0
// console.log(true + 1); //2
// console.log(true + "1"); //true1
// console.log(5 + "2"); //52
// console.log("5" + true); //5true.

// console.log(5 && 1); //1
// console.log(5 || 1); //5

// console.log(0 || 1); //1
// console.log(1 || 2); //1
// console.log(0 && 1); //0
// console.log(1 && 2); //2

// //----------------------------------->
// const s1 = "hello";
// const s2 = new String("hello");

// console.log(s1 == s2); //true
// console.log(s1 === s2); //false

// const z = [1, 2];
// const v = "1,2";
// console.log(z == v); //true
// console.log(z === v); //false

// const t = [1];
// const l = [2];
// console.log(t + l); //12

// console.log(false || null || "hello"); //hello
// console.log(false && null & "hello"); //false

// //----------------------------------->
// const mySymbol1 = Symbol("description");
// const mySymbol2 = Symbol("description");
// console.log(mySymbol1 === mySymbol2); // false

// const uniqueKey = Symbol("myUniqueProperty");
// const myObject = {
//   name: "Alice",
//   [uniqueKey]: "This is a unique value",
// };
// console.log(myObject[uniqueKey]); // This is a unique value

// //------------------------------------>

// //------------> Swapping two numbers without using a temporary variable or third variable.
// let a = 20;
// let b = 30;

// console.log(`Before Swapping:" a is${a}and b is ${b}`); // Before Swapping: a is 20 and b is 30

// a = a + b; // a becomes 50
// b = a - b; // b becomes 20
// a = a - b; // a becomes 30

// console.log(`After Swapping: a is ${a} and b is ${b}`); // After Swapping: a is 30 and b is 20

// console.log("\n");

// // Swapping using third variable.
// let k = 5;
// let u = 10;

// console.log(`Before Swapping: k is ${k} and u is ${u}`); // Before Swapping: k is 5 and u is 10
// let temp = k; // Using a temporary variable to hold the value of k.
// k = u; // Assigning the value of u to k.
// u = temp; // Assigning the value of temp (original k) to u.

// console.log(`After Swapping: k is ${k} and u is ${u}`); // After Swapping: k is 10 and u is 5

// console.log("\n");

// // --------->Swapping two numbers using destructuring assignment.
// let m = 10;
// let n = 20;

// console.log(`Before Swapping: m is ${m} and n is ${n}`); // Before Swapping: m is 10 and n is 20

// [m, n] = [n, m];

// console.log(`After Swapping: m is ${m} and n is ${n}`); // After Swapping: m is 20 and n is 10

// //-------------------------------------->
// //1.Type Coresion.

// // let value = "4";
// // let secondValue = 5;
// // //when you add a string with number then it will always get string.
// // let result = value + secondValue;
// // //when you use any operator insteadOf (+) then priority will be number value.
// // let result2 = value - secondValue;

// // console.log(result); //45
// // console.log(typeof result); //string

// // console.log(result2); //-1
// // console.log(typeof result2); //number

// //2.Type Casting.
// let value = "22";
// console.log(typeof value); //string

// let newValue = Number(value);
// console.log(newValue); //22
// console.log(typeof newValue); //number

// let value2 = 30;
// console.log(typeof value2); //number

// let newValue2 = String(value2);
// console.log(newValue2); //30
// console.log(typeof newValue2); //string

// let value3 = "Happy";
// console.log(typeof value3); //string

// let newValue3 = Boolean(value3);
// console.log(newValue3); //true
// console.log(typeof newValue3); //boolean

// let value4 = "";
// console.log(typeof value4); //string

// let newValue4 = Number(value4);
// console.log(newValue4); //0
// console.log(typeof newValue4); //number

// //-------------------------------->

// let am = Math.max() < Math.min();
// let bm = Math.max() > Math.min();
// console.log(am); //true
// console.log(bm); //false

// //-------------------------------->

// if ([]) {
//   console.log("Amit is absent");
// } else {
//   console.log("Amit is present");
// }
// // Output: Amit is absent

// //------------------------------------->
// if ([] == true) {
//   console.log("Raghav is absent");
// } else {
//   console.log("Raghav is present");
// }
// // Output: Raghav is present

// //------------------------------------->

// let obj = {
//   a: {
//     b: undefined,
//   },
// };
// console.log(obj.a?.b?.c?.d ?? "Happy"); // Output: Happy

// //------------------------------------>
// var abc = 25;
// if (function f() {}) {
//   abc = abc + typeof f;
// }
// console.log(abc); // Output: 25undefined

// //------------------------------->
// // Example of infinite currying
// function addition(a) {
//   return function (b) {
//     if (b === undefined) {
//       return a; // If no argument is provided, return the accumulated sum
//     }
//     return addition(a + b); // Continue currying with the new sum
//   };
// }

// console.log(addition(1)(2)(3)()); // Output: 6
// console.log(addition(1)(2)(3)(4)(8)()); // Output: 18
// console.log(addition(5)(10)(20)(23)(30)()); // Output: 88

// //----------------------------------->

// console.log(parseInt("7")); //7
// console.log(parseInt("7*6")); //7
// console.log(parseInt("7Din")); //7

// //---------------------------------------->

// class Cosmic {}
// console.log(typeof Cosmic); //function

// //-------------------------->

// const name = "Kumar sanu";
// age = 23;

// console.log(delete name); //false
// console.log(delete age); //true
// console.log(typeof age); //undefined

//--------------------------->

const obj = {
  name: "Amit",
  abc: {
    name: "Sumit",
    experience: "6 Months",
  },
};

const obj2 = { ...obj };
obj2.abc.name = "Developer";
console.log(obj.abc.name); //Developer

//------------------------->

const array = [
  [0, 1],
  ["Udit", "Kumar"],
  [3, 4],
];
//1st Way.
// let flatArray = array.flat(Infinity);
// console.log(flatArray);[ 0, 1, 'Udit', 'Kumar', 3, 4 ]

//2nd Way.
function flatten(array) {
  let flat = [];
  for (let i = 0; i < array.length; i++) {
    let val = array[i];
    if (Array.isArray(val)) {
      flat = flat.concat(flatten(val));
    } else {
      flat.push(val);
    }
  }
  return flat;
}
console.log(flatten(array)); //[ 0, 1, 'Udit', 'Kumar', 3, 4]
