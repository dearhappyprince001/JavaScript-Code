let arr = [5, 6];
arr.unshift(4);
arr.push(7);
console.log(arr);

function getElement(array, position) {
  return array[position - 1];
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getElement(array, 3));

let arr2 = [2, 3, 4, 6, 8];
console.log(arr2.slice(1, 3)); //last index position not included.
