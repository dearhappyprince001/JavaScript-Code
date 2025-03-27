//---------------------->create an object by literals.

let student = {
  fullName: "Dear Happy Prince",
  marks: 96,
  rollNo: 19,
};
console.log(student.marks);
student.freeze(); //is method se hum object ki values ko change nhi kr sakte hai.

//-------------------->create an object by literals.

const entity = {
  firstName: "suraj",
  lastName: "kumar",
  age: 34,
  eyeColor: "blue",
};
console.log(entity);

//----------------------->create an object by literals.

const product = {
  company: "Zara",
  price: 866,
  item_name: "T-shirt",
};
console.log(product.price);
console.log(product.company);
console.log(product["item_name"]); //we can also access an elements by using [] bracket lekin yaha par value bhi matters karti hai agar string value hai toh "" double Quotes mein value likhenge  --> instead of .property
console.log(product[price]);

delete product.company; //we can also add or delete item from an object.
console.log(product);

const person = {}; //create an empty object.

//---------------->add properties in an object.

firstName = "Suraj";
lastName = "kumar";
age = 55;
eyeColor = "red";

// console.log(firstName, lastName, age, eyeColor); //how to use the properties for output.

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "happy",
      lastName: "prince",
    },
  },
};
console.log(regularUser.fullName.userFullName); //mtlb ki object ke andar object ko bhi access kar sakte hai or values ko bhi.

//-------------------------------->create an object by new Keyword or constructor.

const personn = new Object(); //create an object .

//------------------->add properties.

person.firstName = "suraj";
person.lastName = "kumar";
person.age = 33;
person.eyeColor = "green";

console.log(personn);

//-------------------------->Object-References.

let a = 5;
let b = a;
console.log(`a = ${a} , b = ${b}`);
a = 8;
console.log(`a = ${a} , b = ${b}`);

let x = { num: 5 }; //1st object.
let y = x; //2nd object.
console.log(`x = ${x.num} , y = ${y.num}`);
x.num = 8;
console.log(`x = ${x.num} , y = ${y.num}`);

//------------------------>Prototyping.

const employee = {
  calcTax() {
    console.log("tax rate is 10%");
  },
};

const amit = {
  salary: 40000,
};

amit.__proto__ = employee;

//---------------------------->create a class.

class Human {
  //properties.

  age = 21; //explicitly public.
  marks = 90; //explicitly public.
  nName = "krishna"; //explicitly public.
  rollNo = 29; //explicitly public.

  constructor(newAge, newMarks) {
    //create a constructor.
    this.age = newAge;
    this.marks = newMarks;
  }

  //behaviour

  walking() {
    console.log("I am Walking");
  }

  running() {
    console.log("i m running");
  }
}

let object = new Human(30, 100); //create an object through classes.
// console.log(obj.marks);
// console.log(obj.rollNo);
// console.log(obj.nName);
console.log(object.marks); //for-constructor.
console.log(object.age); //for-constructor.

//------------------------>Default-Parameter.

function sayMyName(myName) {
  console.log("My Name is:", myName);
}
sayMyName("Dear Happy Prince");

function sayMyName(myName = "Happy Tyagi") {
  //use as a default-value.
  console.log("My Name is:", myName);
}
sayMyName();

function solve(value = { age: 22, wt: 60, fName: "happy" }) {
  //object bhi pass kr sakte hai.
  console.log("print this value:", value);
}
solve();

function array(values = ["happy", "prince", "tyagi"]) {
  //array bhi pass kr sakte hai.
  console.log(values);
}
array();

class car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

//AutoBoxing. ----> Automatic conversion of primitive to objects,called auto boxing.

console.log("This is a String".length);
console.log("This is a String".toUpperCase());
console.log("This is a String".replaceAll("s", "p"));

//hum ek objects ko add bhi kar sakte hai dusre object mein by using Object.assign ({})Method or by using ...spread operator{}.

const target = { 1: "a", 2: "b" };
const source = { 3: "c", 4: "d" };

const obj = Object.assign({}, target, source);
console.log(obj);
//or
const spread = { ...target, ...source };
console.log(spread);
