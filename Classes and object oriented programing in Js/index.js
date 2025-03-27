// ------------>1.Object Literals.

const user = {
  userName: "happy",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    console.log(this);
  },
};
console.log(user.userName);
console.log(user.getUserDetails());

//--------->2.constructor Function jo hai vo har bar ek new instance deta hai .

function user(userName, loginCount, isLoggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  //return this;
}
//const userOne = user("karan", 12, true);

//const userTwo = user("rohit", 15, false); //ye sari values override kar dega sari toh is problem ko dur karne ke liye new keyword ka use karte hai jis se values override na ho .

//console.log(userOne);

//------------------OR.

const userOne = new user("karan", 12, true);

const userTwo = new user("rohit", 15, false);

const userThree = new user("Punnet", 20, true);

console.log(userOne);

console.log(userTwo);

console.log(userThree);

//-------------->3.Prototypal Inheritance.

// const User = {
//   name: "chai",
//   email: "chai@gmail.com",
// };

// const Teacher = {
//   makeVideo: true,
// };

// const TeachingSupport = {
//   isAvailable: false,
// };

// const TaSupport = {
//   makeAssignment: "JS Assignment",
//   fullTime: true,
//   __proto__: TeachingSupport,
// };

// Teacher.__proto__ = User; //ye old syntax hai.

//--------------------------> Modern Syntax of Prototypal inheritance .

Object.setPrototypeOf(TeachingSupport, Teacher); //The Object.setPrototypeOf() method in JavaScript is a standard built-in object that will sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.

//example.
let geek1 = {
  prop1() {
    return "Object.isExtensible()";
  },
  prop2() {
    return "JavaScript ";
  },
};
let geek2 = {
  prop3() {
    return "Geeksforgeeks";
  },
};

Object.setPrototypeOf(geek2, geek1);

console.dir(geek2);
console.log(geek2.prop3());
console.log(geek2.prop2());
console.log(geek2.prop1());
