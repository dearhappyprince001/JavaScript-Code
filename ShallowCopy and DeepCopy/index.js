//Shallow-Copy.

let a = { name: "Google" }; //directory.

let b = a;
let c = b;

c.name = "Microsoft";

console.log(a.name);
console.log(b.name);
console.log(c.name);
