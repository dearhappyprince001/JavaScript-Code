//Global scope
//it is declared all over the file such as in block,function,conditional-statement,loops.

var age = 22;

console.log(age);

{
  console.log(age); //block level
}

if (true) {
  console.log(age); //conditional level
}

for (let i = 1; i <= 4; i++) {
  console.log(age); //lopping
}

function hello() {
  console.log(age); //in function.
}
hello();

//Function-Scope.
//its only used only in function block.

//console.log(age);   //it's not possible it will create error.

function sayHello() {
  var age = 21; //by var keyword.
  let fullName = "happy"; //by let keyword.
  const size = 34; ////by const keyword.
  console.log(age);
  console.log(fullName);
  console.log(size);
}
//console.log(age);  //it's not possible it will create error.

sayHello();

//Block scope

console.log(mName);
{
  var mName = "happy";
  console.log(mName);
}

console.log(mName);

{
  let age = 22; //by let keyword
  console.log(age);
}
console.log(age); //it will create error.

{
  const age = 22; //by const keyword
  console.log(age);
}
console.log(age); //it will create error.

//-------------->1.Global Scope.

let globalVariable = "I am global";

function showGlobalVariable() {
  console.log(globalVariable);
}
showGlobalVariable();

//Modify global variable.
globalVariable = "i am still global";
console.log(globalVariable);

//----------------->2.Function Scope.

function greet() {
  let message = "hello i m local";
  console.log(message); //Accessible inside the function.
}
greet();

//console.log(message); //Reference Error message is not defined (outside the function).

//-------------------->3.Block Scope.

{
  var blockScope = "I am var block-scope";
  let blockScoped = "I am let block-scoped";
  const anotherBlockScope = "I am const block-scope";

  console.log(blockScope); //Accessible inside the block.
  console.log(blockScoped); //Accessible inside the block.
  console.log(anotherBlockScope); //Accessible inside the block.
}
// console.log(blockScope); //I am var block scope.
// console.log(blockScoped); //Error:blockScoped is not defined.
// console.log(anotherBlockScope); //Error:anotherBlockScope is not defined.

//------------------->4.Lexical-Scope.

function outerFunction() {
  let outerVariable = "I am in Outer Scope";

  function innerFunction() {
    console.log(outerVariable); //I am in Outer Scope.
  }
  innerFunction();
}
outerFunction();

//console.log(outerVariable); //Error:outerVariable is not defined(outside its scope).
