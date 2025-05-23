// 1.sort an array in ascending order
function sortArray(array) {
  return array.sort((a, b) => a - b);
}
console.log(sortArray([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]

// 2.sort an array in descending order
function sortArrayDescending(array) {
  return array.sort((a, b) => b - a);
}
console.log(sortArrayDescending([5, 6, 2, 1, 3, 4])); // Output: [6, 5, 4, 3, 2, 1]

// 3.program to merge two arrays
// by using concat() method
function mergeArray(array1, array2) {
  return array1.concat(array2);
}
console.log(mergeArray([1, 2, 3, 4, 5], [5, 6, 7, 8, 9, 10])); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//by using spread operator
function mergeSpreadArray(array1, array2) {
  return [...array1, ...array2];
}
console.log(mergeSpreadArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 4.program to find common elements in two arrays
function findCommonElements(array1, array2) {
  return array1.filter((value) => array2.includes(value));
}
console.log(findCommonElements([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])); // Output: [4, 5]

// 5.Remove duplicates from an array
function removeDuplicates(array) {
  return [...new Set(array)];
}
console.log(removeDuplicates([1, 2, 3, 3, 4, 2, 4, 5, 1, 2, 3])); // Output: [1, 2, 3, 4, 5]

// 6.program to sort an array of string in alphabetical order
function sortStringArray(array) {
  return array.sort();
}
console.log(sortStringArray(["banana", "apple", "orange", "kiwi"])); // Output: ['apple', 'banana', 'kiwi', 'orange']

// 7.program to check if an array is empty or not
function isArrayEmpty(array) {
  return array.length === 0;
}
console.log(isArrayEmpty([])); // Output: true
console.log(isArrayEmpty([1, 2, 3])); // Output: false

// 8.program to check if an array is sorted
function isArraySorted(array) {
  return array.every(
    (value, index) => index === 0 || value >= array[index - 1]
  );
}
console.log(isArraySorted([1, 2, 3, 4, 5])); // Output: true
console.log(isArraySorted([5, 4, 3, 2, 1])); // Output: false

// 9.program to find the largest number in an array
function findLargestNumber(array) {
  return Math.max(...array);
}
console.log(findLargestNumber([1, 2, 3, 4, 5])); // Output: 5

// 10.program to find the smallest number in an array
function findSmallestNumber(array) {
  return Math.min(...array);
}
console.log(findSmallestNumber([1, 2, 3, 4, 5])); // Output: 1

// 11.union of two arrays
function union(array1, array2) {
  return [...new Set([...array1, ...array2])];
}
console.log(union([1, 2, 3], [3, 4, 5])); // Output: [1, 2, 3, 4, 5] remove duplicates.

// 12.program to find the sum of all numbers in an array
function findSum(array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
console.log(findSum([1, 2, 3, 4, 5])); // Output: 15

// 13.program to find the average of all numbers in an array
function findAverage(array) {
  return findSum(array) / array.length;
}
console.log(findAverage([1, 2, 3, 4, 5])); // Output: 3

//---------------------------------------------> String Related Questions

//program to reverse a string
function reverseString(string) {
  return string.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: "olleh"

//remove duplicates from a string
function removeDuplicatesFromString(string) {
  return [...new Set(string)].join("");
}
console.log(removeDuplicatesFromString("hello world")); // Output: "helo wrd"

//program to check if a string is a palindrome
function isPalindrome(string) {
  const reversedString = reverseString(string);
  return string === reversedString;
}
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

//check if a string contains another string
function containsString(string, substring) {
  return string.includes(substring);
}
console.log(containsString("hello world", "world")); // Output: true
console.log(containsString("hello world", "worlds")); // Output: false

//find longest word in a string
function findLongestWord(string) {
  const words = string.split(" ");
  return words.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );
}
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "quick"

//count no of vowels in a string
function countVowels(string) {
  const vowels = "aeiouAEIOU";
  return string.split("").filter((char) => vowels.includes(char)).length;
}
console.log(countVowels("hello world")); // Output: 3
console.log(countVowels("aeiou")); // Output: 5

//repeat a string in given number of times
function repeatString(string, times) {
  return string.repeat(times);
}
console.log(repeatString("hello", 3)); // Output: "hellohellohello"

//program to convert a string to uppercase
function toUpperCase(string) {
  return string.toUpperCase();
}
console.log(toUpperCase("hello world")); // Output: "HELLO WORLD"

//program to convert a string to lowercase
function toLowerCase(string) {
  return string.toLowerCase();
}
console.log(toLowerCase("HELLO WORLD")); // Output: "hello world"

//calculate the power of a number
function calculatePower(base, exponent) {
  return Math.pow(base, exponent);
}
console.log(calculatePower(2, 3)); // Output: 8
console.log(calculatePower(3, 2)); // Output: 9

//program to find the factorial of a number
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1

//convert celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(0)); // Output: 32
console.log(celsiusToFahrenheit(100)); // Output: 212

//convert fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log(fahrenheitToCelsius(32)); // Output: 0
console.log(fahrenheitToCelsius(212)); // Output: 100

//-------------------------------->Object Related Questions

//program to create an object
const person = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log(person); // Output: { name: 'John', age: 30, city: 'New York' }

//program to access object properties
console.log(person.name); // Output: "John"
console.log(person["age"]); // Output: 30

//program to add a property to an object
person.country = "USA";
console.log(person); // Output: { name: 'John', age: 30, city: 'New York', country: 'USA' }

//program to remove a property from an object
delete person.city;
console.log(person); // Output: { name: 'John', age: 30, country: 'USA' }

//program to check if a property exists in an object
function hasProperty(object, property) {
  return object.hasOwnProperty(property);
}
console.log(hasProperty(person, "name")); // Output: true
console.log(hasProperty(person, "city")); // Output: false

//program to merge two objects
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }

//program to clone an object
const clonedObject = { ...person };
console.log(clonedObject); // Output: { name: 'John', age: 30, country: 'USA' }

//program to iterate over an object
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 30
// country: USA

//program to find the length of an object
function objectLength(object) {
  return Object.keys(object).length;
}
console.log(objectLength(person)); // Output: 3

//program to check if an object is empty
function isObjectEmpty(object) {
  return Object.keys(object).length === 0;
}
console.log(isObjectEmpty({})); // Output: true
console.log(isObjectEmpty({ a: 1 })); // Output: false

//program to find the keys of an object
function objectKeys(object) {
  return Object.keys(object);
}
console.log(objectKeys(person)); // Output: ['name', 'age', 'country']

//program to find the values of an object
function objectValues(object) {
  return Object.values(object);
}
console.log(objectValues(person)); // Output: ['John', 30, 'USA']

//program to find the entries of an object
function objectEntries(object) {
  return Object.entries(object);
}
console.log(objectEntries(person)); // Output: [['name', 'John'], ['age', 30], ['country', 'USA']]

//count the number of properties in an object
function countProperties(object) {
  return Object.keys(object).length;
}
console.log(countProperties(person)); // Output: 3
console.log(countProperties({ a: 1, b: 2, c: 3 })); // Output: 3
