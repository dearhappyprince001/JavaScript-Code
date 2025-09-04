// // // function sortDescendingArray(array) {
// // //   return array.sort((a, b) => b - a);
// // // }
// // // console.log(sortDescendingArray([3, 4, 1, 5, 6, 4, 6, 8]));

// // // function ascendingOrder(array) {
// // //   return array.sort((a, b) => a - b);
// // // }
// // // console.log(ascendingOrder([4, 5, 6, 8, 2, 1, 0]));

// // // function concat(array1, array2) {
// // //   return array1.concat(array2);
// // // }
// // // console.log(concat([1, 2, 3, 4, 5], [5, 7, 8, 9]));

// // // function spread(array1, array2) {
// // //   return [...array1, ...array2];
// // // }
// // // console.log(spread([8, 1, 2, 3], [5, 0, 6, 7]));

// // // function common(array1, array2) {
// // //   return array1.filter((value) => array2.includes(value));
// // // }
// // // console.log(common([1, 2, 3, 4], [5, 6, 7, 8, 2]));

// // // function max(array) {
// // //   return Math.max(...array);
// // // }
// // // console.log(max([1, 3, 4, 6]));

// // // function min(array) {
// // //   return Math.min(...array);
// // // }
// // // console.log(min([1, 0, 3, 4, 5]));

// // // function removeDuplicacy(array) {
// // //   return [...new Set(array)];
// // // }
// // // console.log(removeDuplicacy([1, 2, 1, 3, 4, 4, 5, 6, 3]));

// // // function sortString(array) {
// // //   return array.sort();
// // // }
// // // console.log(sortString(["happy", "prince", "kumar", "khanna"]));

// // // function empty(array) {
// // //   return array.length === 0;
// // // }
// // // console.log(empty([]));
// // // console.log(empty([1, 2, 3]));

// // // function union(array1, array2) {
// // //   return [...new Set([...array1, array2])];
// // // }
// // // console.log(union([1, 2, 3, 4], [3, 4, 5, 6]));

// // // function sum(array) {
// // //   return array.reduce(
// // //     (accumulator, currentValue) => accumulator + currentValue,
// // //     0
// // //   );
// // // }
// // // console.log(sum([1, 2, 3, 4, 5]));

// // // function reverse(string) {
// // //   return string.split("").reverse().join();
// // // }
// // // console.log(reverse("hello"));

// // // function removeDupString(string) {
// // //   return [...new Set(string)].join("");
// // // }
// // // console.log(removeDupString("hello world"));

// // // function contains(string, substring) {
// // //   return string.includes(substring);
// // // }
// // // console.log(contains("hello World", "world"));
// // // console.log(contains("hello World", "World"));

// // // function repeat(string, times) {
// // //   return string.repeat(times);
// // // }
// // // console.log(repeat("hi", 9));

// // // function uppercase(string) {
// // //   return string.toUpperCase();
// // // }
// // // console.log(uppercase("karan"));

// // // function lowercase(string) {
// // //   return string.toLowerCase();
// // // }
// // // console.log(lowercase("TINNY"));

// // // function power(base, exponent) {
// // //   return Math.pow(base, exponent);
// // // }
// // // console.log(power(2, 3));

// // //------------------------------------------>

// // function sortArray(array) {
// //   return array.sort((a, b) => a - b);
// // }
// // console.log(sortArray([1, 3, 9, 2, 3, 0]));

// // function sortDesArray(array) {
// //   return array.sort((a, b) => b - a);
// // }
// // console.log(sortDesArray([1, 5, 7, 8, 4]));

// // function concatArray(array1, array2) {
// //   return array1.concat(array2);
// // }
// // console.log(concatArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

// // function concatArray(array1, array2) {
// //   return [...array1, ...array2];
// // }
// // console.log(concatArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

// // //common element in two array
// // function commonElements(array1, array2) {
// //   return array1.filter((value) => array2.includes(value));
// // }
// // console.log(commonElements([1, 2, 3, 4, 5], [4, 5, 6, 77, 8]));

// // //remove duplicates elements from an array.
// // function removeElements(array1) {
// //   return [...new Set(array1)];
// // }
// // console.log(removeElements([1, 2, 2, 3, 1, 4, 5, 6, 5]));

// // //sort an array of alphabetical.
// // function sortArray(array) {
// //   return array.sort();
// // }
// // console.log(sortArray(["apple", "banana", "grapes"]));

// // //array is empty or not.
// // function check(array) {
// //   return array.length === 0;
// // }
// // console.log(check([]));
// // console.log(check([1, 2, 3]));
// // console.log(check([{}]));

// // //largest elements in an array.
// // function largest(array) {
// //   return Math.max(...array);
// // }
// // console.log(largest([1, 20, 30, 40, 3]));

// // //smallest elements in an array.
// // function smallest(array) {
// //   return Math.min(...array);
// // }
// // console.log(smallest([12, 20, 40, 0, 1, 2]));

// // //union of two array.
// // function union(array1, array2) {
// //   return [...new Set([...array1, ...array2])];
// // }
// // console.log(union([1, 2, 3, 4, 5], [3, 4, 5, 6, 7, 8, 9]));

// // //sum of all elements in an array.
// // function sum(array) {
// //   return array.reduce(
// //     (accumulator, currentValue) => accumulator + currentValue
// //   );
// // }
// // console.log(sum([1, 2, 3, 4, 5]));

// // //reverse a string.
// // function reverse(string) {
// //   return string.split("").reverse().join("");
// // }
// // console.log(reverse("A,B,C,D,E"));

// // //remove duplicacy from a string.
// // function duplicates(string) {
// //   return [...new Set(string)].join("");
// // }
// // console.log(duplicates("dudu")); //du.

// // //string contains another string.
// // function reversed(string, subString) {
// //   return string.includes(subString);
// // }
// // console.log(reversed("Happy Prince", "Prince"));

// // //repeat a given string
// // function repeat(string, time) {
// //   return string.repeat(time);
// // }
// // console.log(repeat("happy", 3));

// // function upper(string) {
// //   return string.toUpperCase();
// // }
// // console.log(upper("happy"));

// // function lower(string) {
// //   return string.toLowerCase();
// // }
// // console.log(lower("HAPPY"));

// // //merge two objects.

// // const obj1 = { a: 1, b: 2 };
// // const obj2 = { c: 3, d: 4 };

// // const merged = { ...obj1, ...obj2 };
// // console.log(merged);
// // function isEmpty(object) {
// //   return Object.keys(object).length === 0;
// // }
// // console.log(isEmpty({}));
// // console.log(isEmpty({ a: 1 }));

// // function keys(object) {
// //   return Object.keys(object);
// // }
// // console.log(keys({ a: 1, b: 2, c: 3 })); //[ 'a', 'b', 'c' ]

// // function values(object) {
// //   return Object.values(object);
// // }
// // console.log(values({ a: 1, b: 2, c: 3 })); //[ 1, 2, 3 ]

// // function entries(object) {
// //   return Object.entries(object);
// // }
// // console.log(entries({ a: 1, b: 2, c: 3 })); //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// // difference between normal function and arrow function.

// // global.name = "Prince";
// // const obj = {
// //   name: "happy",

// //   arrowGreet: () => {
// //     console.log(`In Arrow Function   ${name}`);
// //   },

// //   normalGreet: function () {
// //     console.log(`In Normal Function  ${this.name}`);
// //   },
// // };
// // obj.arrowGreet();
// // obj.normalGreet();

// // //Event Propagation.

// // //Event Bubbling.
// // // let div = document.querySelector("div");
// // // let button = document.querySelector("button");

// // // div.addEventListener("click", () => {
// // //   console.log("Div Clicked");
// // // });

// // // button.addEventListener("click", () => {
// // //   console.log("Button Clicked");
// // // });

// // //Event Capturing.
// // let div = document.querySelector("div");
// // let button = document.querySelector("button");

// // div.addEventListener(
// //   "click",
// //   () => {
// //     console.log("Div Clicked");
// //   },
// //   true
// // );

// // button.addEventListener(
// //   "click",
// //   () => {
// //     console.log("Button Clicked");
// //   },
// //   true
// // );

// //Infinite Currying.

// // function addition(a) {
// //   return function (b) {
// //     if (b == undefined) {
// //       return a;
// //     }
// //     return addition(a + b);
// //   };
// // }

// // console.log(addition(1)(4)(4)(6)(8)());

// //closures.

// // function outerFunction(a) {
// //   function innerFunction(b) {
// //     return a + b;
// //   }
// //   return innerFunction;
// // }
// // const add = outerFunction(5);
// // console.log(add(2)); //7

// // function outerFunction(a) {
// //   function innerFunction(b) {
// //     return a + b;
// //   }
// //   return innerFunction;
// // }
// // const add = outerFunction(5);
// // console.log(add(5)); //10

// //factory function
// //factory function is a function that creates a new object each time when it is called.

// // function createPerson(name, age) {
// //   return {
// //     name: name,
// //     age: age,
// //     greet: function () {
// //       console.log(`hello my name is ${this.name} and my age is ${this.age}`);
// //     },
// //   };
// // }

// // let person1 = createPerson("happy", 22);
// // console.log(person1);

// function findCommonElements(array1, array2) {
//   return array1.filter((value) => array2.includes(value));
// }
// console.log(findCommonElements([1, 2, 3, 4, 5], [5, 4, 3, 6, 7]));

// function isEmpty(array) {
//   return array.length === 0;
// }
// console.log(isEmpty([]));

// function sumOfArray(array) {
//   return array.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
//   );
// }
// console.log(sumOfArray([1, 3, 5, 7, 9, 11]));

// function stringContains(string, subString) {
//   return string.includes(subString);
// }
// console.log(stringContains("hello henna", "hello"));

// let obj1 = {
//   name: "rajan",
//   age: 22,
//   class: "12th",
//   location: "Delhi",
// };

// let obj2 = {
//   name: "chanchal",
//   age: 20,
//   class: "11th",
//   location: "agra",
// };
// let combinedObject = Object.assign({}, obj1, obj2);
// console.log(combinedObject);

// let againCombinedObject = { ...obj1, ...obj2 };
// console.log(againCombinedObject);

// function objectEmpty(object) {
//   return Object.keys(object).length === 0;
// }
// console.log(objectEmpty({}));

// function count(object) {
//   return Object.keys(object).length;
// }
// console.log(count({ a: 1, b: 2, c: 3 }));

// let a = 10;
// let b = 20;
// console.log(`Before Swapping a is ${a} and b is ${b}`);
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(`After Swapping a is ${a} and b is ${b}`);

// let m = 30;
// let n = 40;
// console.log(`Before Swapping m is ${m} and n is ${n}`);
// [m, n] = [n, m];
// console.log(`After Swapping m is ${m} and n is ${n}`);

// //Type-casting.

// let str = "22";
// console.log(str);
// console.log(typeof str);

// let convertIntoNumber = Number(str);
// console.log(convertIntoNumber);
// console.log(typeof convertIntoNumber);

// let convertIntoBoolean = Boolean(str);
// console.log(convertIntoBoolean);
// console.log(typeof convertIntoBoolean);

// // let convertIntoDouble = Double(str);
// // console.log(convertIntoDouble);
// // console.log(typeof convertIntoDouble);

// // let convertIntoNull = Null(str);
// // console.log(convertIntoNull);
// // console.log(typeof convertIntoNull);

// // let convertIntoUndefined = Undefined(str);
// // console.log(convertIntoUndefined);
// // console.log(typeof convertIntoUndefined);

// let value1 = true;
// let value2 = false;
// let value3 = "";
// let value4 = 5;
// let value5 = 10.5;
// let value6 = NaN;
// let value7 = null;
// let value8 = undefined;
// let defaultValue = "hello";

// let result1 = value1 ?? defaultValue;
// let result2 = value2 ?? defaultValue;
// let result3 = value3 ?? defaultValue;
// let result4 = value4 ?? defaultValue;
// let result5 = value5 ?? defaultValue;
// let result6 = value6 ?? defaultValue;
// let result7 = value7 ?? defaultValue;
// let result8 = value8 ?? defaultValue;
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);
// console.log(result6);
// console.log(result7);
// console.log(result8);

//factorial of a function using recursion.s
function factorial(n) {
  if (n == 0) return 1;
  if (n == 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); //120
console.log(factorial(7)); //5040

//
let number = [10, 9, 2, 3, 6, 7, 0];
number.sort(function (a, b) {
  return a - b;
});
console.log(number);

let num = [1, 20, 34, 90, 12, 4, 56, 8];
num.sort(function (a, b) {
  return b - a;
});
console.log(num);

function mergedArray(array1, array2) {
  return array1.concat(array2);
}

console.log(mergedArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

function mergeArray(array1, array2) {
  return [...array1, ...array2];
}
console.log(mergeArray([10, 20, 30], [50, 60]));

//find common elements in two arrays.

let array1 = [1, 2, 3, 4, 5];
let array2 = [2, 4, 5, 6, 7];

let findCommonElements = array1.filter((value) => array2.includes(value));
console.log(findCommonElements); //[2,3,4]

//remove duplicates fromm an array.

let array = [1, 2, 3, 2, 4, 5];
let uniqueValue = [...new Set(array)];
console.log(uniqueValue); //[ 1, 2, 3, 4, 5 ]

//sort an array of alphabetical.
let arr = ["Apple", "Banana", "Cheery", "Mango", "Orange"];
let sorted = arr.sort();
console.log(sorted);

//array is empty or not.

let arrr = [1, 2, 3, 4, 5];
if (arrr.length === 0) {
  console.log("Array is Empty...");
} else {
  console.log("Array is not Empty...");
}

//program to find the largest number in an array.

let arr1 = [1, 2, 3, 4, 5];
let largest = Math.max(...arr1);
console.log(largest); //5.

//program to find the smallest number in an array

let arr2 = [2, 3, 4, 1, 6];
let smallest = Math.min(...arr2);
console.log(smallest); //1.

//union of two array.

let arr3 = [1, 2, 32, 2, 8];
let arr4 = [1, 5, 6, 8];

let union = [...new Set([...arr3, ...arr4])];
console.log(union); //[ 1, 2, 32, 8, 5, 6]

//find sum of all numbers in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = number.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); //37

//Reverse A string.

let string = "Hello World";

let reversed = string.split("").reverse().join("");
console.log(reversed); //dlroW olleH

//Remove duplicate from string.

let str = "Programming";

let unique = [...new Set(str)].join();
console.log(unique); //P,r,o,g,a,m,i,n

//String is palindrome or not.

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

//string contains another string.

let str5 = "Hello World";
let str6 = "Hello HellO";

console.log(str5.includes("world")); //false
console.log(str6.includes("hello")); //false

//find longest word in a string.

function findLongestWord(str) {
  let words = str.split(" ");
  words.sort((a, b) => b.length - a.length);
  return words[0];
}

let sentence = "Learning JavaScript is fun and exciting";
console.log(findLongestWord(sentence));
// Output: "JavaScript"

//Count no of Vowels in a string.

function vowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(vowels("JavaScript")); // 3 (a, a, i)
console.log(vowels("Hello World")); // 3 (e, o, o)

//Repeat a String a given no of times.

let str7 = "India";
let repeated = str7.repeat(4);
console.log(repeated); //IndiaIndiaIndiaIndia

//convert string to upperCase.

let str8 = "usa";
let upperCase = str8.toUpperCase();
console.log(upperCase); //USA.

//Calculate power of a number.

let base = 2;
let exponent = 5;

let result = Math.pow(base, exponent);
console.log(result); //32

//Merged two Object.

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let mergedObject = Object.assign({}, obj1, obj2);
console.log(mergedObject); //{ a: 1, b: 2, c: 3, d: 4 }

//check object is empty or not.

let object = { a: 2 };
if (object.isEmpty === 0) {
  console.log("Object is Empty...");
} else {
  console.log("Object is not Empty...");
}

//count properties of an object.

let obj3 = { a: 1, b: 2, c: 3 };
let count = Object.keys(obj3).length;
console.log(count); //3

//Infinite currying.

function addition(a) {
  return function (b) {
    if (b === undefined) {
      return a;
    }
    return addition(a + b);
  };
}
console.log(addition(5)(6)()); //11
console.log(addition(10)(20)(30)(40)(50)()); //150

//Flatten Array.

let arr8 = [1, [2, 3], [4, [5, 6]]];
let flatArray = arr8.flat(2);
console.log(flatArray); //[ 1, 2, 3, 4, 5, 6 ]

//LExical scope.

function outer() {
  let name = "Amit";
  // console.log(age);

  function inner() {
    console.log(name); //Amit
    let age = 22;
    console.log(age); //22
  }

  function inner2() {
    console.log(name); //Amit
  }
  inner();
  inner2();
}
outer();
// console.log(name);

//closures.

// function outerFunction(x) {
//   function innerFunction(y) {
//     return x + y;
//   }
//   return innerFunction;
// }
// let add5 = outerFunction(5);
// console.log(add5(2)); //7

// //Event-Bubbling.

// // let div = document.querySelector("div");
// // let button = document.querySelector("button");

// // div.addEventListener("click", () => {
// //   console.log("Div Clicked");
// // });

// // button.addEventListener("click", () => {
// //   console.log("Button Clicked");
// // });

// //Event Capturing.
// let div = document.querySelector("di");
// let Button = document.querySelector("button");

// div.addEventListener(
//   "click",
//   () => {
//     console.log("Div Clicked");
//   },
//   true
// );
// button.addEventListener(
//   "click",
//   () => {
//     console.log("Button Clicked");
//   },
//   true
// );

// //Event-Delegation.

// document.getElementById("parent").addEventListener("click", (event) => {
//   if (event.target.classList.contains("btn")) {
//     alert(`You Clicked ${event.target.innerText}`);
//   }
// });

//Factory Function.

function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(`My name is $ {name} and my age is $ {age}`);
    },
  };
}

let person1 = createPerson("Amit", 23);
let person2 = createPerson("Suraj", 21);
let person3 = createPerson("Harsh", 25);
console.log(person1);
console.log(person2);
console.log(person3);

//IIFE
(function connection() {
  console.log("Database Connected Successfully...");
})();

//Normal Function and Arrow function.

const obj = {
  name: "Ajay",
  age: 22,

  arrowGreet: () => {
    console.log(`My name is ${name}`);
  },

  normalGreet: function () {
    console.log(`My name is ${this.name}`);
  },
};
obj.arrowGreet();
obj.normalGreet();
