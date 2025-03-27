//reverse a number.
function reverseNumber(num) {
  // Convert the number to a string and split it into an array
  let reversedStr = Math.abs(num).toString().split("").reverse().join("");

  // Convert back to number and restore the sign if negative
  let reversedNum = parseInt(reversedStr, 10) * Math.sign(num);

  return reversedNum;
}

// Example usage
console.log(reverseNumber(1234)); // Output: 4321
console.log(reverseNumber(-5678)); // Output: -8765
console.log(reverseNumber(100)); // Output: 1
