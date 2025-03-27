class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value.toUpperCase;
  }
}

const happy = new User("happy@gmail.com", "123");
console.log(happy.password);

//getters.
class P {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

const res = new P("Anjali");
console.log(res.name);

//setters.
class P {
  constructor(name) {
    this._name = name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const res = new P("Anjali");
res.name = "Ayushi"; // Using the setter to change the name
console.log(res._name); // Output: Ayushi
