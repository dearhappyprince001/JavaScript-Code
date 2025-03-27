//------------->1.call method ye current execution context kisi aur function ko pass kar deta hai.

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
