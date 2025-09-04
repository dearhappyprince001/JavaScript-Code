//------------->1.call method-------------->ye current execution context kisi aur function ko pass kar deta hai.

//Problem statement:

let userDetails = {
  userName: "John",
  age: 30,
  Designation: "Software Engineer",
  printDetails: function () {
    console.log(this);
    //console.log(this.name); //this point to userDetails object.
    //console.log(this.age); //this point to userDetails object.
  },
};
userDetails.printDetails(); //ye current execution context userDetails ko pass karega.

let userDetails2 = {
  userName: "Doe",
  age: 25,
  Designation: "Data Scientist",
};
userDetails.printDetails.call(userDetails2); //ye current execution context userDetails2 ko pass karega.

//example1.
function setUserName(userName) {
  this.userName = userName;
}

function createUser(userName, email, password) {
  //setUserName(userName);//agar aaise krenge toh user name call nhi hoga.
  //setUserName.call(userName);//iss tarha se bhi call nhi hoga.
  setUserName.call(this, userName);

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@gmail.com", "123");
console.log(chai);

//example2.

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "John Doe":
console.log(person.fullName.call(person1));

//----------------------->2.Bind method.

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Happy",
  lastName: "Prince",
};

let fullName = person.fullName.bind(member);
console.log(fullName);
