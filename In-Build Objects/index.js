//Number

const score = 400;
console.log(score); //400

const balance = new Number(1000);
console.log(balance); //1000

//Math Object.

console.log(Math); //print Math object.

console.log(Math.PI); //print PI value.

console.log(Math.max(10, 90, 100, 30, 78)); //print max num.

console.log(Math.min(9, 12, 34, 56)); //print min num.

console.log(Math.round(1.8)); //round-off.

console.log(Math.floor(2.4)); //print just smallest value.

console.log(Math.ceil(3.9)); //print just greatest value.

console.log(Math.abs(5)); //absolute value or its convert negative values into positive value.

console.log(Math.abs(-3)); //convert negative values to positive value.

console.log(Math.random()); //it provides a random no between 0 and 1.

console.log(Math.sqrt(5)); //square-root.

console.log(Math.pow(2, 5)); //power.

//Date Object.

let currentDate = new Date();
console.log(currentDate); //its prints the current date.
console.log(currentDate.getTime()); //it prints the time in milliseconds.
console.log(currentDate.getDate()); //it prints the date.
console.log(currentDate.getMonth()); //it prints the month.
console.log(currentDate.getFullYear()); //it prints the year.
console.log(currentDate.getHours()); //it prints the hours.
console.log(currentDate.getMinutes()); //it prints the minutes.
console.log(currentDate.getSeconds()); //it prints the seconds.
console.log(currentDate.getMilliseconds()); //it prints the milliseconds.
console.log(currentDate.getDay()); //it prints the day.
console.log(currentDate.getTimezoneOffset()); //it prints the timezone offset.
console.log(currentDate.getUTCDate()); //it prints the UTC date.
console.log(currentDate.getUTCHours()); //it prints the UTC hours.
console.log(currentDate.getUTCMonth()); //it prints the UTC month.
console.log(currentDate.getUTCFullYear()); //it prints the UTC year.
console.log(currentDate.getUTCSeconds()); //it prints the UTC seconds.
console.log(currentDate.getUTCMilliseconds()); //it prints the UTC milliseconds.
console.log(currentDate.getUTCDate()); //it prints the UTC date.
console.log(currentDate.getUTCDay()); //it prints the UTC day.
console.log(currentDate.getUTCMonth()); //it prints the UTC month.
console.log(currentDate.getUTCFullYear()); //it prints the UTC year.
console.log(currentDate.getUTCSeconds()); //it prints the UTC seconds.
console.log(currentDate.getUTCMilliseconds()); //it prints the UTC milliseconds.
console.log(currentDate.getUTCDay()); //it prints the UTC day.
console.log(currentDate.getUTCMonth()); //it prints the UTC month.
console.log(currentDate.getUTCFullYear()); //it prints the UTC year.
console.log(currentDate.getUTCSeconds()); //it prints the UTC seconds.
console.log(currentDate.toISOString()); //it prints the date in ISO format.
console.log(currentDate.toLocaleDateString()); //it prints the date in local format.
console.log(currentDate.toLocaleTimeString()); //it prints the time in local format.
console.log(currentDate.toLocaleString()); //it prints the date and time in local format.
console.log(currentDate.toUTCString()); //it prints the date in UTC format.
console.log(currentDate.toString()); //it prints the date in string format.
console.log(currentDate.toDateString()); //it prints the date in string format.

let date = new Date("september 16 2003 07:15");
console.log(date);

let newDate = new Date(2006, 5, 9, 8); //create a date in a parameters format.
console.log(newDate);

console.log(date.getDay());
console.log(date.getFullYear());

console.log(curr.toString());
console.log(curr.toDateString());
console.log(curr.toLocaleString());
