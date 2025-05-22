//---------------------->Anonymous Function As Value.

let sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(5, 5)); //call a function.

//------------------->Arrow Function.

let sum1 = (num1, num2) => {
  return num1 + num2;
};

console.log(sum(4, 5)); //call a function.

// let square = (num) => {
//   return num * num;
// };

// console.log(square(5)); //call a function.

//---------------->OR in a single arguments brackets are optional.

let square = (num) => num * num; //for a single line brackets and return are optional.

console.log(square(5));

//set-timeout and set-intervals.

// let alarm = () => console.log("good morning");
// let timerId = setTimeout(alarm, 2000);
// console.log(`Alarm set with timerid: ${timerId}`);
// clearTimeout(timerId);

// setInterval(alarm, 2000);
// let intervalId = setInterval(alarm, 2000);
// clearInterval(intervalId);
