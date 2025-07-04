//----------------------->Lexical Scoping.
//Note: agar hum children function mein koi variable define karte hai toh use hum sirf ussi children function ke andar hi access kar sakte hai parent function ke andar access nhi kar sakte hai ya fir dusre siblings functions ke andar bhi access nhi kar sakte hai mtlb ki children function sirf parent ke variables ko hi access kar sakta hai siblings ke variables ko nhi access kar sakta hai or parent function bhi children ke variables ko access nhi kar sakta hai.

//Example of Lexical Scoping.

//Outer function
function outer() {
  let userName = "Amit"; //Outer function variable.
  console.log("OUTER FUNCTION: ", userName); //Amit
  console.log("OUTER FUNCTION: ", secret); //ReferenceError --->Secret is not defined.
  console.log("OUTER FUNCTION: ", keys); //ReferenceError --->keys is not defined.

  //inner function
  function inner() {
    let secret = "my123"; //Inner function variable.
    console.log("INNER FUNCTION: ", userName); //Amit accessing outer function variable.
    console.log("INNER FUNCTION : ", secret); //my123 accessing inner function variable.
    console.log("INNER FUNCTION: ", keys); //ReferenceError --->keys is not defined.
  }
  //another inner function
  function innerTwo() {
    let keys = "myKeys"; //Inner function variable.
    console.log("INNERTWO FUNCTION: ", keys); //myKeys accessing innerTwo function variable.
    console.log("INNERTWO FUNCTION: ", userName); //Amit accessing outer function variable.
    console.log("INNERTWO FUNCTION: ", secret); //ReferenceError --->Secret is not defined.
  }
  inner();
  innerTwo();
}
outer();

console.log("OUTER FUNCTION: ", userName); //ReferenceError -----> userName is not defined.
console.log("OUTER FUNCTION: ", secret); //ReferenceError -----> secret is not defined.
console.log("OUTER FUNCTION: ", keys); //ReferenceError -----> keys is not defined

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

//Example of Closure in Real World Scenario.

//outer function chaiStall()
function chaiStall() {
  //outer function variables
  let recipe = "Masala Chai";
  let price = 20;

  //inner function serveChai()
  function serveChai() {
    console.log(`Serving ${recipe} for ₹${price}`); //serveChai can access recipe and price because of closure.
  }
  return serveChai; //Returning the inner function that has access to the outer function's variables.
}

const chaiLadka = chaiStall(); //chaiLadka is now a reference to serveChai, which has access to recipe and price.
chaiLadka(); //Serving Masala Chai for ₹20
