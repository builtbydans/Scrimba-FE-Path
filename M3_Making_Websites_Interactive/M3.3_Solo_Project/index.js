/* Challenge: Using the Figma file design, build the game calculator. You are
   to build the display scorecards and the buttons that increment as per the design.
*/

/* Steps:
   1. Create the scorecard <divs> and style them. ✅
   2. Add the <span> tag within this div to represent the score. ✅
   3. Create the button UI for scores. ✅
   4. Build the functions for the buttons and test.
   5. Create a 'new game' button which resets the score.
*/

let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');

let score = 0;

function addOneHome() {
  score += 1;
  homeScore.innerText = score;
}

function addTwoHome() {
  score += 2;
  homeScore.innerText = score;
}

function addThreeHome() {
  score += 3;
  homeScore.innerText = score;
}

function addOneGuest() {
  score += 1;
  guestScore.innerText = score;
}

function addTwoGuest() {
  score += 2;
  guestScore.innerText = score;
}

function addThreeGuest() {
  score += 3;
  guestScore.innerText = score;
}

function newGame() {
  score = 0;
  homeScore.innerText = "0";
  guestScore.innerText = "0";
}
