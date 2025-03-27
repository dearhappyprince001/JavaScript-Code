//Event-handling in Js not a inline Event Handling.

let butt = document.querySelector("button"); //access the element.
console.log(butt);

butt.onclick = (evt) => {
  console.log(evt); //evt = event object.
  console.log(evt.type); //event type.
  console.log(evt.target); //event target.
  console.log(evt.timeStamp); //event timeStamp.
  console.log(evt.clintX, evt.clintY); //horizontally and vertically.

  console.log("button was clicked");
};

let div = document.querySelector("div"); //access the element.
console.log(div);

div.onmouseover = () => {
  console.log("you are inside the div ");
};

// Handling-Event by Event-listeners this is the modern approach.

let butt = document.querySelector("button");
console.log(butt);

butt.addEventListener("click", () => {
  //by event-listeners.
  console.log("button was clicked");

  butt.addEventListener("click", (evt) => {
    console.log(evt); //print event object in event listener.
    console.log(evt.type); //print event type.
    console.log(evt.target); //print event target.
    console.log(evt.clientX, evt.clientY); //horizontally an
  });
});
