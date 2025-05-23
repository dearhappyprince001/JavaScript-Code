function sortDescendingArray(array) {
  return array.sort((a, b) => b - a);
}
console.log(sortDescendingArray([3, 4, 1, 5, 6, 4, 6, 8]));

function ascendingOrder(array) {
  return array.sort((a, b) => a - b);
}
console.log(ascendingOrder([4, 5, 6, 8, 2, 1, 0]));

function concat(array1, array2) {
  return array1.concat(array2);
}
console.log(concat([1, 2, 3, 4, 5], [5, 7, 8, 9]));

function spread(array1, array2) {
  return [...array1, ...array2];
}
console.log(spread([8, 1, 2, 3], [5, 0, 6, 7]));

function common(array1, array2) {
  return array1.filter((value) => array2.includes(value));
}
console.log(common([1, 2, 3, 4], [5, 6, 7, 8, 2]));

function max(array) {
  return Math.max(...array);
}
console.log(max([1, 3, 4, 6]));

function min(array) {
  return Math.min(...array);
}
console.log(min([1, 0, 3, 4, 5]));

function removeDuplicacy(array) {
  return [...new Set(array)];
}
console.log(removeDuplicacy([1, 2, 1, 3, 4, 4, 5, 6, 3]));

function sortString(array) {
  return array.sort();
}
console.log(sortString(["happy", "prince", "kumar", "khanna"]));

function empty(array) {
  return array.length === 0;
}
console.log(empty([]));
console.log(empty([1, 2, 3]));

function union(array1, array2) {
  return [...new Set([...array1, array2])];
}
console.log(union([1, 2, 3, 4], [3, 4, 5, 6]));

function sum(array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
console.log(sum([1, 2, 3, 4, 5]));

function reverse(string) {
  return string.split("").reverse().join();
}
console.log(reverse("hello"));

function removeDupString(string) {
  return [...new Set(string)].join("");
}
console.log(removeDupString("hello world"));

function contains(string, substring) {
  return string.includes(substring);
}
console.log(contains("hello World", "world"));
console.log(contains("hello World", "World"));

function repeat(string, times) {
  return string.repeat(times);
}
console.log(repeat("hi", 9));

function uppercase(string) {
  return string.toUpperCase();
}
console.log(uppercase("karan"));

function lowercase(string) {
  return string.toLowerCase();
}
console.log(lowercase("TINNY"));

function power(base, exponent) {
  return Math.pow(base, exponent);
}
console.log(power(2, 3));
