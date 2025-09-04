//reduce()Method is used to applies a reducer function from left to right (start to end).
const arr = [1, 2, 3, 4];

const sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10 ( ((((0+1)+2)+3)+4) )

//reduceRight()Method is used to applies a reducer function from right to left (end to start).
const arrr = ["a", "b", "c"];

const result = arrr.reduceRight((acc, curr) => acc + curr, "");

console.log(result); // "cba"
