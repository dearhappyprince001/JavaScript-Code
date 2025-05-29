//--------------->Event Bubbling Example.
//it occurs from child to parent.
//it is the default behavior of events in the DOM.
// In this example, when the button is clicked, the event bubbles up to the div,
var div = document.querySelector("div");
var button = document.querySelector("button");
div.addEventListener("click", () => {
  console.log("Div clicked");
});

button.addEventListener("click", () => {
  console.log("Button clicked");
});

//---------------->Event Capturing Example.
//it occurs from parent to child.
//it is mention to true in the addEventListener method.
// In this example, the event is captured at the div level before it reaches the button.
var div = document.querySelector("div");
var button = document.querySelector("button");
div.addEventListener(
  "click",
  () => {
    console.log("Div clicked");
  },
  true
);

button.addEventListener(
  "click",
  () => {
    console.log("Button clicked");
  },
  true
);

//------------->Event Propagation Example.
// In this example, we prevent the event from bubbling up to the div when the button is clicked.

var div = document.querySelector("div");
var button = document.querySelector("button");
div.addEventListener("click", () => {
  console.log("Div clicked");
});

button.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevents the event from bubbling up to the div
  console.log("Button clicked");
});

//-------------->Immediate Propagation Example.
//if you have multiple event listeners on the same element,
// the stopImmediatePropagation method prevents any other listeners from being called.
var div = document.querySelector("div");
var button = document.querySelector("button");

button.addEventListener("click", (event) => {
  console.log("Button clicked");
});

button.addEventListener("click", (event) => {
  event.stopImmediatePropagation; // Prevents any other click event listeners on the button from being called
  console.log("Button1 clicked");
});

//---------------->Prevent Default Example.
// The preventDefault method is used to prevent the default action of an event.
//it helps from refreshing the page when a link is clicked.

var a = document.querySelector("a");
a.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents the default action of the link
  console.log("Link clicked, but default action prevented"); //ye logic chlega lekin page refresh nahi hoga
});
