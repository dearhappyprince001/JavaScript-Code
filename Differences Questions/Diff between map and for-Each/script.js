//filter()Method does not return a new Array it will return undefined.

//map()Method return a new Array that contains all the modifies values.

const num = [1, 2, 3, 4];

//if we use this way,then it wll return undefined.
const x = num.forEach((n) => n * 2);
console.log(x); //undefined
//if we use this way
num.forEach((n) => console.log(n * 2)); //2 4 6 8

const y = num.map((n) => n * 2);
console.log(y); //[ 2, 4, 6 ,8]
