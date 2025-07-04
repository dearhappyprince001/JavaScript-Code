//Temporal Dead Zone is a behaviour where we try to access the variable before it is initialized  .

console.log(marks); //Reference error
console.log("happy");
console.log("hello");

let marks = 90; //line no 3,4,5,7 tak temporary dead zone hai mtlb marks ki value access nhi ho skti hai.
console.log(marks); //90

//No Temporal Dead Zone with var

console.log(a1); // undefined
var a1 = 10;

console.log(b); // Reference error
let b = 10;

console.log(c); // 20
const c = 20;

{
  console.log(a); // Reference error
  var a = 5;
}

{
  console.log(d); // Reference error
  let d = 30;
}

{
  console.log(e); // Reference error
  const e = 40;
}
{
}
