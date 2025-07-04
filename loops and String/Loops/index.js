//  ------------------------>For-Loop.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// -------------------->Reverse-Counting.

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// ------------------->Break-Keyword.

for (let i = 1; i <= 5; i++) {
  if (i == 4) break;
  else console.log(i);
}

// ------------------->Continue-keyword.

for (let i = 1; i <= 5; i++) {
  if (i == 4) continue;
  else console.log(i);
}

// ----------------------->While-Loop.

let j = 1; //initialization
while (j <= 7) {
  console.log(j);
  j++; //Updation
}

//-------------------------->Reverse-counting

let k = 5;
while (k > 0) {
  console.log(k);
  k--;
}

// --------------------------->do-while loop

let i = 1; //initialization.
do {
  console.log(i);
  i++; //updation.
} while (i <= 5);

//------------------------------->for in loop

let person = {
  firstName: "happy",
  lastName: "prince",
  age: 17,
  country: "india",
  gender: "Male",
};
//for in loop is used to iterate over the properties of an object.
for (let key in person) {
  console.log(person[key]);
}

console.log("\n");

for (let entries in person) {
  console.log(person[entries]);
}

//-------------------------------->for of loop.

const arr = [1, 2, 3, 4, 5]; //with array.
for (const iterator of arr) {
  console.log(iterator);
}

const string = "Hello jee"; //with string.
for (const greet of string) {
  console.log(`Each char is ${greet}`);
}

const ids = new Set([101, 102, 103]); //with set.
for (const id of ids) {
  console.log(id);
}

//with map.
const scores = new Map([
  ["Alice", 90],
  ["Bob", 80],
]);
for (const [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

//--------------------------------->for each loop.

//Note : callback function mein function ka name nhi dete hai.

const coding = ["js", "ruby", "java", "python", "cpp"];

//with normal function.
coding.forEach(function (item) {
  console.log(item);
});

//or by using Arrow function with call back.

coding.forEach((item) => {
  console.log(item);
});

//for-each ke andar parameters mein aur kuch bhi pass karva sakte hai mtlb multiple parameters bhi de sakte hai jaise index ,array-itself.

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

//in this case an array contains three object in it.

const myCoding = [
  {
    languageName: "JavaScript", //first Object.
    languageFileName: "js",
  },

  {
    languageName: "Java", //second object.
    languageFileName: "java",
  },

  {
    languageName: "python", //third object.
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});

//Note : for-each-loop koi bhi value return nhi krta hai vo undefined print kr dega.

const mCoding = ["js", "ruby", "java", "python", "cpp"];

const values = mCoding.forEach(function (item) {
  console.log(item);
});
console.log(values); //undefined.

//--------------------------------->filter-Method.

// Note : filter method bhi apne andar call-back function hi leta hai for-each ki tarha or filter method value ko return karta hai lekin for-each method nhi karta hai.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumber = number.filter((num) => num > 5); //is method mein condition deni padti hai jaisse ki num>3.

console.log(newNumber);

//---------------------->Map in Javascript -------> map value should be unique and retrieve in order

const map = new Map();
// map is a collection of key-value pairs where keys are unique and values can be of any type.
// map is iterable and maintains the insertion order of its elements.

map.set("name", "happy");
map.set("age", 17);
map.set("country", "india");
console.log(map); // ye map ko print karega.
console.log(map.get("name")); // ye map ke andar se name ki value ko print karega.

console.log(map.get("age")); // ye map ke andar se age ki value ko print karega.

console.log(map.get("country")); // ye map ke andar se country ki value ko print karega.

console.log(map.size); // ye map ke andar kitne elements hai unka size print karega.

console.log(map.has("name")); // ye map ke andar name ki value hai ya nhi ye check karega.

console.log(map.delete("name")); // ye map ke andar se name ki value ko delete karega.

console.log(map); // ye map ko print karega.

//------------------------------------>Map-method.

//note : map method bhi apne andar call back function hi leta hai aur ye bhi value return karta hai filter method ki tarha.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNumbers
  .map((num) => num + 10)
  .map((num) => num * 1)
  .filter((num) => num >= 5); //and multiple chaning bhi lga sakte hai .

console.log(newNum); //sabhi values mein 10 add ho jayega.

// //------------------>Reduce-Method.
// // ye method bhi apne andar call-back function leta hai aur value bhi return karta hai.

const array = [1, 2, 3];

const myNumbers = array.reduce(function (acc, currVal) {
  console.log(`acc: $ {acc} and currVal : $ {currVal}`);
  return acc + currVal;
// }, 0);
// console.log(myNumbers);
