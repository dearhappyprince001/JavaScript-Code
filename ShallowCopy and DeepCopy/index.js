//Shallow Copy ---> In case Of Shallow Copy,Original object ki nested properties mein jo bhi changes krte hai,toh uska reflection shallow copy mein bhi hota hai because their memory References are Same.

// Iska matlab hai ki agar original object ke nested properties mein changes kiye jaate hain, toh woh changes shallow copy mein bhi reflect hote hain.

//In shallow copy original object ke reference ko copy kiya jaata hai, na ki uski value ko.

//Original object and Shallow copy ka memory reference same hota hai, isliye agar original object mein koi bhi change kiya jaata hai toh woh shallow copy mein bhi reflect hota hai.
//lekin Original Object and Deep Copy ka memory reference alag hota hai, isliye agar original object mein koi bhi change kiya jaata hai toh woh deep copy mein reflect nahi hota hai.

//In shallow copy Primitive data types (like string, number, boolean) ki values ko copy kiya jaata hai, lekin reference types (like objects, arrays) ke liye sirf unka reference copy hota hai.

//In Deep copy primitive data types aur reference types dono ki values ko copy kiya jaata hai, isliye agar original object mein koi bhi change kiya jaata hai toh woh deep copy mein reflect nahi hota hai.

let originalObj = {
  name: "Ajay",
  age: 23,
  address: { city: "Delhi" },
};

//1st Way ---> Object.Assign({}).
// let shallowCopy = Object.assign({}, originalObj);
// console.log(shallowCopy);  //{ name: 'Ajay', age: 23, address: { city: 'Delhi' } }

//2nd Way ---> {...Spread Operator}.
let shallowCopy = { ...originalObj };
console.log(shallowCopy); // { name: 'Ajay', age: 23, address: { city: 'Delhi' } }

originalObj.address.city = "Mumbai";
console.log(shallowCopy.address.city); //Mumbai

originalObj.name = "Karan";
console.log(shallowCopy.name); //Ajay.

originalObj.age = 24;
console.log(shallowCopy.age); //23

//Deep-Copy ---> In case of Deep Copy,Original object ki nested properties mein jo bhi changes krte hai,toh uska reflection deep copy mein nahi hota hai because their memory References are Different.
let deepCopy = JSON.parse(JSON.stringify(originalObj));
console.log(deepCopy); //{ name: 'Karan', age: 24, address: { city: 'Mumbai' } }

console.log(shallowCopy.address.city); //Mumbai
console.log(deepCopy.address.city); //Delhi
