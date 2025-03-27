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

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof nName);
console.log(typeof lname);
console.log(typeof myName);

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

let string = "      Dear Happy Prince      ";
console.log(string.trimStart());

let string2 = "happy";
console.log(string2.repeat(5));

let string3 = "happy Prince";
console.log(string3.replace("Prince", "Tyagi"));

let string4 = "happy dear tyagi";
console.log(string4.replaceAll("a", "n"));
