//--------------------->optional Chaining.
// Optional chaining (?.) allows you to safely access deeply nested properties of an object without having to check if each property in the chain exists.
//Example1.

const user = {
  name: "John",
  address: {
    city: "New York",
    zip: "10001",
  },
};

const city = user.address.city;
console.log(city); // "New York"

const zip = user.address.zip;
console.log(zip); // "10001"

const country = user.address?.country;
console.log(country); // undefined

const gender = user.address?.gender;
console.log(gender);

console.log(city, zip, country); // "New York" "10001" undefined

//Example2.
const user2 = { profile: { name: "Alice" } };

console.log(user2.profile?.name); // "Alice"
console.log(user2.profile?.age); // undefined

//------------------>Nullish Coalescing Operator.
// The nullish coalescing operator (??) allows you to provide a default value when dealing with null or undefined values.
// It returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.

//Example
const value1 = null;
const value2 = undefined;
const value3 = "Hello";
const value4 = 0;
const value5 = "";
const value6 = false;
const defaultValue = "I am Default Value";

const result1 = value1 ?? defaultValue;
console.log(result1); // " I am Default Value"

const result2 = value2 ?? defaultValue;
console.log(result2); // "I am Default Value"

const result3 = value3 ?? defaultValue;
console.log(result3); // "Hello"

const result4 = value4 ?? defaultValue;
console.log(result4); // 0 (0 is not null or undefined)

const result5 = value5 ?? defaultValue;
console.log(result5); // "" (empty string is not null or undefined)

const result6 = value6 ?? defaultValue;
console.log(result6); // false (false is not null or undefined)

console.log(result1, result2, result3, result4, result5, result6); // " I am Default Value" "I am Default Value" "Hello" 0 "" false
