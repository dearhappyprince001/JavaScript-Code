//----------------->Debouncing
// Debouncing is a technique used to limit the rate at which a function can fire.

let counter = 0;
function getData() {
  console.log("Fetching Data" + counter++);
}

function myDebounce(callBack, delay) {
  let timer;
  return function (...args) {
    // Return a new function that will be debounced
    if (timer) clearTimeout(timer); // Clear the previous timer
    timer = setTimeout(() => {
      // Set a new timer
      callBack();
    }, delay);
  };
}

const BetterFunction = myDebounce(getData, 1000);

//------------------>Throttling
// Throttling is a technique used to ensure that a function is only called at most once in a specified time period.
// It is useful for limiting the rate at which a function can be executed, such as when handling scroll or resize events.
// Example: Throttling a button click event

const myThrottle = (callBack, delay) => {
  return function (...args) {
    document.getElementById("myId").disabled = true; // Disable the button
    setTimeout(() => {
      // Set a timer to call the function after the specified delay
      // Call the callback function
      callBack();
    }, delay);
  };
};

const myFunction = myThrottle(() => {
  document.getElementById("myId").disabled = false; // Enable the button
  console.log("User Clicked !!"); // This will be called at most once every 2 seconds
}, 3000);
