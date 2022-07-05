// Create two variables, firstName and lastName
const firstName = 'Danish';
const lastName = 'Shafi';

// Concatenate the two variables into a third variable called fullName
const fullName = firstName + " " + lastName;

// Log fullName to the console
console.log(fullName);

// Create a function that logs out "Hi there, Linda!" when called
let name = "Linda";
let greeting = "Hi there";

function greet() {
  console.log(greeting + ", " + name + "!");
}

greet();

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
let myPoints = 3;

function add3Points() {
  myPoints += 3;
}

function remove1Point() {
  myPoints -= 3;
}

// Try to predict what each of the lines will log out
console.log("2" + 2) // "22"
console.log(11 + 7) // 18
console.log(6 + "5") // "65"
console.log("My points: " + 5 + 9) // "My points: 59"
console.log(2 + 2) // 4
console.log("11" + "14") // "1114"

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
function clickHandler() {
  document.getElementById('error').innerText = "Something went wrong, please try again";
};
