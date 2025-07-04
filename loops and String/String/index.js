//      Creating a String.

let firstName = "happy"; //by literals.
let lastName = "prince"; //by literals.

let nName = `Dear Happy Prince`; //by literals.
let lname = `dear
happy
prince`;
console.log(lname); //by literals.

let myName = new String("Happy"); // by new keyword.
console.log(myName);

console.log(typeof firstName); //string.
console.log(typeof lastName); //string.
console.log(typeof nName); //string.
console.log(typeof lname); //string.
console.log(typeof myName); //object.

let s1 = "happy";
let s2 = "prince";
let s3 = "dear happy prince";
let add = s1 + s2;
console.log(add);
console.log(s2.length);
console.log(s2.charAt(4));
console.log(s1.at(4));
console.log(s1.toUpperCase());
console.log(s2.toLowerCase());
console.log(s3.substring(5)); //start from index position 5th.
console.log(s3.substring(3, 9)); //last index position not included.
console.log(s3.slice(3, 9)); //last index position not included.
console.log(s3.slice(-5)); //last 5 characters.
console.log(s3.slice(3, -5)); //start from index position 3rd and last 5 characters not included.
console.log(s3.indexOf("happy")); //first occurrence of happy.
console.log(s3.lastIndexOf("happy")); //last occurrence of happy.
console.log(s3.includes("happy")); //true or false.
console.log(s3.startsWith("dear")); //true or false.
console.log(s3.endsWith("prince")); //true or false.
console.log(s3.split(" ")); //split by space.
console.log(s3.split(" ", 2)); //split by space and limit to 2.
console.log(s3.split(" ", 3)); //split by space and limit to 3.

let string = "      Dear Happy Prince      ";
console.log(string.trimStart());

let string2 = "happy";
console.log(string2.repeat(5));

let string3 = "happy Prince";
console.log(string3.replace("Prince", "Tyagi"));

let string4 = "happy dear tyagi";
console.log(string4.replaceAll("a", "n"));
