//------------------------>Pure and Impure function

//Pure function are those function that does not changes the global state or variable and always shows the same output for the same input.
function addition(a, b) {
  return a + b;
}
console.log(addition(2, 3)); //5

//Impure function are those function that changes the global state or variable and always show different output for the same input.
let globalCount = 0;
function incrementCount() {
  globalCount += 1;
  return globalCount;
}
console.log(incrementCount()); //1
