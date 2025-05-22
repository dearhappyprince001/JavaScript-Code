//----------------------------------------->JSON.
// JSON is used to store data in key-value pair.
// JSON is used to store data in string format.
// JSON is used to store data in browser.
// JSON is used to store data in browser even after refresh.

let product = {
  name: "TShirt",
  price: 899,
  rating: {
    stars: 4.5,
    noOfReview: 457,
  },
};
console.log(typeof product); //JSON object.
console.log(product);

//JSON.stringify() is used to convert JSON object into String.
let str = JSON.stringify(product); //convert JSON object to String.
console.log(typeof str);
console.log(str);

//JSON.parse() is used to convert String into JSON object.
let newProduct = JSON.parse(str); //convert String to JSON Object.
console.log(typeof newProduct);
console.log(newProduct);

//------------------------------------->Local-Storage.
// local storage is used to store data in key-value pair.
// local storage is used to store data in browser.
// local storage is used to store data in string format.
// local storage is used to store data in browser even after refresh.

let product = {
  name: "TShirt",
  price: 899,
  rating: {
    stars: 4.5,
    noOfReview: 457,
  },
};

// localStorage.setItem("Name", "JavaScript");  //set-item in local storage.

// localStorage.setItem("Price", "5677");  //set-item in local storage.

// console.log(localStorage.getItem("Name")); //get-item .

// console.log(localStorage.getItem("Price")); //get-item .

localStorage.setItem("product", JSON.stringify(product)); //convert object into String.

console.log(localStorage.getItem("product"));

let product2 = JSON.parse(localStorage.getItem("product")); //convert string into object.

console.log(product2);

// localStorage.removeItem("Price"); // it is used to remove item from local storage.

// localStorage.clear(); //it is used to clear complete local storage.

//------------------------------------------>Date.

let myDate = new Date();
console.log(myDate); //current date and time.
console.log(myDate.toString()); //current date and time in string format.
console.log(myDate.toDateString()); //current date in string format.
console.log(myDate.toTimeString()); //current time in string format.
console.log(myDate.toLocaleString()); //current date and time in local format.
console.log(myDate.toISOString()); //current date and time in ISO format.
console.log(myDate.toUTCString()); //current date and time in UTC format.
console.log(myDate.toLocaleDateString()); //current date in local format.
console.log(myDate.toLocaleTimeString()); //current time in local format.

//methods of date .

console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMonth());
console.log(myDate.getHours());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());
