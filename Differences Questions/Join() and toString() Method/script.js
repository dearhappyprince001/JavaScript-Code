const fruits = ["Apple", "Banana", "Cheery"];

console.log(fruits.join()); //Apple,Banana,Cheery (Applies default commas).

console.log(fruits.join(" - ")); //Apple - Banana - Cheery

console.log(fruits.join(" | ")); //Apple | Banana | Cheery

console.log(fruits.join("")); //AppleBananaCheery (Applies no separator).

console.log(fruits.join(" / ")); //Apple / Banana / Cheery

console.log(fruits.join(" ? ")); //Apple ? Banana ? Cheery

console.log(fruits.toString()); //Apple,Banana,Cheery
