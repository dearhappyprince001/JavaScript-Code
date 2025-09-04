const { localStorage } = requires("node-localstorage");

//Create a new Record.
const person = { name: "Aman Rajput" };

localStorage.setItem("person", JSON.stringify(person));

//Read/Retrieve a Record.
const storedPerson = JSON.parse(localStorage.getItem("person"));
console.log(storedPerson.name); // "Aman Rajput"

//Update a Record.
let storedPerson = JSON.parse(localStorage.getItem("person"));
storedPerson.name = "Vinnit Rajput"; // update value
localStorage.setItem("person", JSON.stringify(storedPerson));

//Delete data
localStorage.removeItem("person");

//Clear all Records.
localStorage.clear();
