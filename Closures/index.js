//----------------------->Lexical Scoping.
//Note: agar hum children function mein koi variable define karte hai toh use hum sirf ussi children function ke andar hi access kar sakte hai parent function ke andar access nhi kar sakte hai ya fir dusre siblings functions ke andar bhi access nhi kar sakte hai mtlb ki children function sirf parent ke variables ko hi access kar sakta hai siblings ke variables ko nhi access kar sakta hai or parent function bhi children ke variables ko access nhi kar sakta hai.

function outer() {
  let userName = "Amit";
  console.log("OUTER FUNCTION: ", secret); //ReferenceError --->Secret is not defined.

  function inner() {
    let secret = "my123";
    console.log("INNER FUNCTION: ", userName); //Amit
    console.log("INNER FUNCTION : ", secret); //my123
  }
  function innerTwo() {
    console.log("INNERTWO FUNCTION: ", userName); //Amit
    console.log("INNERTWO FUNCTION: ", secret); //ReferenceError --->Secret is not defined.
  }
  inner();
  innerTwo();
}
outer();
console.log("OUTER FUNCTION: ", userName); //ReferenceError -----> userName is not defined.

//------------------------Closures.
// deeply explained in html file.

function outerFunction(x) {
  function innerFunction(y) {
    //Even though x is not a parameter of innerFunction, it still has access to it because of JavaScript closures. The inner function can "remember" the variable x from its outer scope.
    return x + y; //innerFunction returns the sum of x and y.
  }
  return innerFunction; //outerFunction returns the inner function itself.
}
const add5 = outerFunction(5); //add5 is now a reference to innerFunction, but with x permanently set to 5 because of the closure. and it looks like add5(y) => 5 + y.
console.log(add5(2)); //7
//y = 2, and x was already fixed as 5.
//So it returns 5 + 2 = 7, and prints 7.
