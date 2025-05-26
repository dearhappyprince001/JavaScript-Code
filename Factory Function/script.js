//----------------->Factory Function
//Factory function returns an object and can be used to create multiple instances of similar objects.
// It is a function that creates and returns an object.

//Example1
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    },
  };
}
const person1 = createPerson("Alice", 30);
const person2 = createPerson("Bob", 25);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.

//Example2
function createCar(make, model, year) {
  return {
    make: make,
    model: model,
    year: year,
    displayInfo: function () {
      console.log(
        `Car Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`
      );
    },
  };
}
const car1 = createCar("Toyota", "Corolla", 2020);
const car2 = createCar("Honda", "Civic", 2021);
car1.displayInfo(); // Output: Car Make: Toyota, Model: Corolla, Year: 2020
car2.displayInfo(); // Output: Car Make: Honda, Model: Civic, Year: 2021
