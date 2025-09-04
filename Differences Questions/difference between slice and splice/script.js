//slice()Method does not modify or change the original Array and last index value is not included in slice()method and also it can directly used with String.

//splice()Method modify or change the original array and last index value is included in splice()Method but it can not directly used with String only used with Arrays.

let arr = [1, 2, 3, 4];
console.log(arr.slice(1, 3)); // [2,3]
console.log(arr.splice(1, 2)); // [2,3] modifies arr → [1,4]
