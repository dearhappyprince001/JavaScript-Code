let x = ["Apple", "Orange", "Grapes", "WaterMellon"];

// Get the iterator object from the array
let y = x[Symbol.iterator]();

// Get the first value from the iterator
y.next();
