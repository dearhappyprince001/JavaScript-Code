// function sortDescendingArray(array) {
//   return array.sort((a, b) => b - a);
// }
// console.log(sortDescendingArray([3, 4, 1, 5, 6, 4, 6, 8]));

// function ascendingOrder(array) {
//   return array.sort((a, b) => a - b);
// }
// console.log(ascendingOrder([4, 5, 6, 8, 2, 1, 0]));

// function concat(array1, array2) {
//   return array1.concat(array2);
// }
// console.log(concat([1, 2, 3, 4, 5], [5, 7, 8, 9]));

// function spread(array1, array2) {
//   return [...array1, ...array2];
// }
// console.log(spread([8, 1, 2, 3], [5, 0, 6, 7]));

// function common(array1, array2) {
//   return array1.filter((value) => array2.includes(value));
// }
// console.log(common([1, 2, 3, 4], [5, 6, 7, 8, 2]));

// function max(array) {
//   return Math.max(...array);
// }
// console.log(max([1, 3, 4, 6]));

// function min(array) {
//   return Math.min(...array);
// }
// console.log(min([1, 0, 3, 4, 5]));

// function removeDuplicacy(array) {
//   return [...new Set(array)];
// }
// console.log(removeDuplicacy([1, 2, 1, 3, 4, 4, 5, 6, 3]));

// function sortString(array) {
//   return array.sort();
// }
// console.log(sortString(["happy", "prince", "kumar", "khanna"]));

// function empty(array) {
//   return array.length === 0;
// }
// console.log(empty([]));
// console.log(empty([1, 2, 3]));

// function union(array1, array2) {
//   return [...new Set([...array1, array2])];
// }
// console.log(union([1, 2, 3, 4], [3, 4, 5, 6]));

// function sum(array) {
//   return array.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );
// }
// console.log(sum([1, 2, 3, 4, 5]));

// function reverse(string) {
//   return string.split("").reverse().join();
// }
// console.log(reverse("hello"));

// function removeDupString(string) {
//   return [...new Set(string)].join("");
// }
// console.log(removeDupString("hello world"));

// function contains(string, substring) {
//   return string.includes(substring);
// }
// console.log(contains("hello World", "world"));
// console.log(contains("hello World", "World"));

// function repeat(string, times) {
//   return string.repeat(times);
// }
// console.log(repeat("hi", 9));

// function uppercase(string) {
//   return string.toUpperCase();
// }
// console.log(uppercase("karan"));

// function lowercase(string) {
//   return string.toLowerCase();
// }
// console.log(lowercase("TINNY"));

// function power(base, exponent) {
//   return Math.pow(base, exponent);
// }
// console.log(power(2, 3));

//------------------------------------------>

function sortArray(array) {
  return array.sort((a, b) => a - b);
}
console.log(sortArray([1, 3, 9, 2, 3, 0]));

function sortDesArray(array) {
  return array.sort((a, b) => b - a);
}
console.log(sortDesArray([1, 5, 7, 8, 4]));

function concatArray(array1, array2) {
  return array1.concat(array2);
}
console.log(concatArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

function concatArray(array1, array2) {
  return [...array1, ...array2];
}
console.log(concatArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

//common element in two array
function commonElements(array1, array2) {
  return array1.filter((value) => array2.includes(value));
}
console.log(commonElements([1, 2, 3, 4, 5], [4, 5, 6, 77, 8]));

//remove duplicates elements from an array.
function removeElements(array1) {
  return [...new Set(array1)];
}
console.log(removeElements([1, 2, 2, 3, 1, 4, 5, 6, 5]));

//sort an array of alphabetical.
function sortArray(array) {
  return array.sort();
}
console.log(sortArray(["apple", "banana", "grapes"]));

//array is empty or not.
function check(array) {
  return array.length === 0;
}
console.log(check([]));
console.log(check([1, 2, 3]));
console.log(check([{}]));

//largest elements in an array.
function largest(array) {
  return Math.max(...array);
}
console.log(largest([1, 20, 30, 40, 3]));

//smallest elements in an array.
function smallest(array) {
  return Math.min(...array);
}
console.log(smallest([12, 20, 40, 0, 1, 2]));

//union of two array.
function union(array1, array2) {
  return [...new Set([...array1, ...array2])];
}
console.log(union([1, 2, 3, 4, 5], [3, 4, 5, 6, 7, 8, 9]));

//sum of all elements in an array.
function sum(array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
console.log(sum([1, 2, 3, 4, 5]));

//reverse a string.
function reverse(string) {
  return string.split("").reverse().join("");
}
console.log(reverse("A,B,C,D,E"));

//remove duplicacy from a string.
function duplicates(string) {
  return [...new Set(string)].join("");
}
console.log(duplicates("dudu")); //du.

//string contains another string.
function reversed(string, subString) {
  return string.includes(subString);
}
console.log(reversed("Happy Prince", "Prince"));

//repeat a given string
function repeat(string, time) {
  return string.repeat(time);
}
console.log(repeat("happy", 3));

function upper(string) {
  return string.toUpperCase();
}
console.log(upper("happy"));

function lower(string) {
  return string.toLowerCase();
}
console.log(lower("HAPPY"));

//merge two objects.

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const merged = { ...obj1, ...obj2 };
console.log(merged);
function isEmpty(object) {
  return Object.keys(object).length === 0;
}
console.log(isEmpty({}));
console.log(isEmpty({ a: 1 }));

function keys(object) {
  return Object.keys(object);
}
console.log(keys({ a: 1, b: 2, c: 3 })); //[ 'a', 'b', 'c' ]

function values(object) {
  return Object.values(object);
}
console.log(values({ a: 1, b: 2, c: 3 })); //[ 1, 2, 3 ]

function entries(object) {
  return Object.entries(object);
}
console.log(entries({ a: 1, b: 2, c: 3 })); //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
