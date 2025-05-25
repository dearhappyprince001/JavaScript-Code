//forEach,filter,Map,sort,reduce are higher order functions in Js.

const companies = [
  { name: "Google", category: "Product Based", start: 1998, end: 2003 },
  { name: "Amazon", category: "Product Based", start: 1994, end: 2004 },
  { name: "Microsoft", category: "Product Based", start: 1975, end: 2000 },
  { name: "Mindtree", category: "Service Based", start: 2004, end: 2010 },
  { name: "TCS", category: "Service Based", start: 1968, end: 2000 },
  { name: "Infosys", category: "Service Based", start: 1981, end: 2000 },
]; // Array of objects

//firstly apply normal for loop to iterate through the array of objects
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]); // Accessing each object in the array
  //console.log(companies[i].name); // Accessing the name property of each object
}

// Using forEach to iterate through the array of objects
companies.forEach((company) => {
  console.log(company); // Accessing each object in the array
});

// Using forEach with an index parameter to access each object and its index
companies.forEach((company, index) => {
  console.log(company, index); // Accessing each object in the array along with its index
});

//with arrow function
companies.forEach((company) => console.log(company.name)); // Accessing the name property of each object using arrow function

//------------------>filter Method
// Using filter to get companies that started after 1990
const filteredCompanies = companies.filter((company) => company.start > 1990);
console.log(filteredCompanies); // Output: Array of companies that started after 1990

// Using filter to get companies that are product based
const productBasedCompanies = companies.filter(
  (company) => company.category === "Product Based"
);
console.log(productBasedCompanies); // Output: Array of product based companies
// Using filter to get companies that started after 2000 and are product based
const filteredProductBasedCompanies = companies.filter(
  (company) => company.start > 2000 && company.category === "Product Based"
);
console.log(filteredProductBasedCompanies); // Output: Array of product based companies that started after 2000

//------------------>Map Method
// Using map to create an array of company names
const companyNames = companies.map((company) => company.name);
console.log(companyNames); // Output: Array of company names

// Using map to create an array of company names with index
const companyNamesWithIndex = companies.map((company, index) => {
  return `${index + 1}. ${company.name}`; // Adding index to the company name
});
console.log(companyNamesWithIndex); // Output: Array of company names with index

const ages = [3, 10, 18, 20, 30, 40, 50, 60, 70, 80, 90, 100]; // Array of ages

//reduce Method
// Using reduce to calculate the sum of all ages
const totalAge = ages.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; // Adding current age to the accumulator
}, 0); // Initial value of accumulator is 0
console.log(totalAge); // Output: Total sum of ages

// Using reduce to calculate the sum of ages greater than 18
const totalAgeAbove18 = ages.reduce((accumulator, currentValue) => {
  if (currentValue > 18) {
    return accumulator + currentValue; // Adding current age to the accumulator if age is greater than 18
  }
  return accumulator; // Returning accumulator if age is not greater than 18
}, 0); // Initial value of accumulator is 0
console.log(totalAgeAbove18); // Output: Total sum of ages greater than 18

// Using reduce to create an object with the count of ages in different ranges
const ageRanges = ages.reduce((accumulator, currentValue) => {
  if (currentValue < 18) {
    accumulator["<18"] = (accumulator["<18"] || 0) + 1; // Increment count for ages less than 18
  } else if (currentValue >= 18 && currentValue < 60) {
    accumulator["18-59"] = (accumulator["18-59"] || 0) + 1; // Increment count for ages between 18 and 59
  } else {
    accumulator["60+"] = (accumulator["60+"] || 0) + 1; // Increment count for ages 60 and above
  }
  return accumulator; // Returning the accumulator object
}, {}); // Initial value of accumulator is an empty object
console.log(ageRanges); // Output: Object with count of ages in different ranges
