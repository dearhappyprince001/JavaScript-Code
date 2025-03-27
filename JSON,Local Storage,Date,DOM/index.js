//JSON.

let product = {
  name: "TShirt",
  price: 899,
  rating: {
    stars: 4.5,
    noOfReview: 457,
  },
};
console.log(typeof product);
console.log(product);

let str = JSON.stringify(product); //convert JSON object to String.
console.log(typeof str);
console.log(str);

let newProduct = JSON.parse(str); //convert String to JSON Object.
console.log(typeof newProduct);
console.log(newProduct);

//Local-Storage.

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

//Date.

let myDate = new Date();
//methods of date .
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMonth());
console.log(myDate.getHours());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());
