// OBJECTS

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

const person = {
  name: 'Dan',
  age: 29,
  country: 'UK'
};

function logData() {
  console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
};

logData();

//// CONDITIONALS

let age = 27

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
  console.log("Free")
} else if (age < 18) {
    console.log("Child Discount")
} else if (age < 27) {
    console.log("Student Discount")
} else if (age < 67) {
    console.log("Full Price")
} else {
    console.log("Senior Citizen Discount")
}

// LOOPS AND ARRAYS

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

console.log("The 5 largest countries in the world: ")
for (let i = 0; i < largeCountries.length; i++) {
  console.log("- " + largeCountries[i])
};

let largerCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largerCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largerCountries.pop();
largerCountries.push('Pakistan');
largerCountries.shift();
largerCountries.unshift('China');
console.log(largerCountries);

// LOGICAL OPERATORS

let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if (dayOfMonth === 13 && weekday === "Friday") {
  console.log('😱');
};

// ROCK, PAPER, SCISSORS

let hands = ["Rock", "Paper", "Scissors"];

function draw() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}
