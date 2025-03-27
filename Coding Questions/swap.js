let num1 = 5;
let num2 = 10;

console.log("Before swapping:", "num1 =", num1, ", num2 =", num2);

// Swapping without a temporary variable
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log("After swapping:", "num1 =", num1, ", num2 =", num2);
