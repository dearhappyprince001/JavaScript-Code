const set = new Set([1, 2, 1, 3, 2, 4, 4, 5, 6]);
console.log(set); //set can store only unique value duplicate values eliminated automatically.
console.log(set.size); //size method specifies the elements in the set.
console.log(set.add(10)); //add method adds element in set.
set.delete(5); //delete method delete the element.
console.log(set);
console.log(set.has(5)); //has method check if value is exist or not.

set.clear(); //clear method removes all values from set.
console.log(set);

// //converting a set into an array.
// const myArray = [...mySet];
// console.log(myArray);
