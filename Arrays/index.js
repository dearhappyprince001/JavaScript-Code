//objects in JS.

let obj = {
  name: "happy",
  age: 18,
  weight: 65,
  greet: function () {
    //create a function in object.
    console.log("hello jee");
  },
};
console.log(obj);
obj.greet(); //access the function.

//creation of an array.

let array = [1, 2, 3, 4, 5];
console.log(array); //by array-literals.
console.log(array[3]); //4
console.log(array.length); //5
console.log(Array.isArray(array)); //true.
console.log(array.includes(10)); //false.

let brr = new Array("prince", 1, "true");
brr.push("tyagi");
brr.push(20);
brr.push(40);
brr.push(50);
brr.pop();
console.log(brr);
brr.shift();
brr.unshift("hello");
console.log(brr.slice(1));
brr.splice(1, "hello");
console.log(brr); //by array-constructors.
console.log(brr[2]); //access-by index position.

let arr = [1, 2, 3, 4, 5];
console.log(arr);

console.log(arr.toString()); //convert array into string without using bracket.

let crr = [2, 8, 4, 6, 1, 9, 7, 0, 3, 2, 5];
crr.sort(); //sort Method.
console.log(crr);

arr.splice(1, 3); //slice method

console.log(arr);

let arr = [10, 20, 30];
let ansArray = arr.map((number) => {
  return number * number;
});
console.log(ansArray); //Map.

let arr = [10, 20, 30, 34, 21, 35, 68];
let arrayEven = arr.filter((number) => {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(arrayEven); //Filter.

let arr = [10, 20, 30, 40];

let ans = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(ans); //Reduce

let arr1 = [9, 5, 3, 4, 7, 1];
arr.sort();

console.log(arr1); //sort.

console.log(arr1.indexOf(7)); //indexOf.

let arr = [4, 2, 9, 5, 7, 3];
arr[3] = 1; //if we change the value of an array.
console.log(arr);

//looping in an array.

let heros = ["ironman", "thor", "hulk", "spiderman"];

for (let idx = 0; idx < heros.length; idx++) {
  console.log(heros[idx]);
}

//converting an array to string.

const fruits = ["apple", "banana", "guavava", "pineapple"];
console.log(fruits.toString());
console.log(fruits.at(2));
console.log(fruits.pop());
console.log(fruits.push("kiwi"));

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];
const arr3 = [5, 4, 3, 2, 1];

console.log(arr1.concat(arr2, arr3)); //concat property.

const arr5 = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];
console.log(arr5.flat()); //flat-method.

//arrays special cases.

const marvel_heros = ["thor", "IronMan", "spiderMan"];
const dc_heros = ["superman", "flash", "batman"];

//by push Method.
marvel_heros.push(dc_heros);
console.log(marvel_heros); //is case mein array ke andar array aa jayega.
console.log(marvel_heros[3][2]); //batman.

//by concat method.
marvel_heros.concat(dc_heros);
console.log(marvel_heros); //is case mein bhi array ke andar ek dusra array aa jayega.

//OR
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); //is case mein dono array ki values ko ek sath mila diya.

//by spread operator and this the best way instead of push and concat.
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); //so is case mein spread operator ki help se hmne dono array ki values ko alg alg kr diya.

//---------------------->flat -method.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_array = another_array.flat(Infinity);
console.log(real_array); //1,2,3,4,5,6,7,6,7,4,5 this flat method considerd a single array from sub array.

//-------------------------->Array of()
let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
console.log(Array.of(score1, score2, score3, score4)); //Array of method.

//---------------------->Every() Method.

// Create an Array
const ages = [32, 33, 20, 40];

// Create a Test Function
function checkAge(age) {
  return age > 18;
}

// Are all ages over 18?
console.log(ages.every(checkAge));
