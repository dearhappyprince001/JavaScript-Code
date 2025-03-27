let marks = [10, 45, 23, 90, 60, 40, 100];

function findMinElement(arr) {
  return Math.min.apply(null, arr);
}
function findMaxElement(arr) {
  return Math.max.apply(null, arr);
}
console.log(findMinElement(marks)); //10
console.log(findMaxElement(marks)); //100
