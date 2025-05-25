function functionA() {
  console.trace("FunctionA called");
  functionB();
}

function functionB() {
  console.trace("FunctionB called");
  functionC();
}

function functionC() {
  console.trace("FunctionC called");
}

functionA();
