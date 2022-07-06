// Blackjack JS Game

// INITALISING VARIABLES
let player = {
  name: 'Dan',
  chips: 100
};

let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";

// DOM ELEMENTS FROM HTML
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById('card-el');

// SETTING THE PLAYER <P> TAG
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// FUNCTION GENERATES RANDOM CARD FOR GAME.
function getRandomCard() {

  let randomCard = Math.floor( Math.random() * 13) + 1;

  if (randomCard === 1) {
      return 11;
  } else if (randomCard > 10) {
      return 10;
  } else {
    return randomCard;
  }
}

// FUNCTION STARTS GAME, VARIABLES ARE INITIALISED AND SET. RENDERGAME() CALLED.
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

/* LOGIC HANDLER FOR GAME. CALCULATES IF SUM IS BLACKJACK OR ABOVE.
   IF OUT OF GAME, SETS ISALIVE TO FALSE WHICH IS A CONDITIONAL FOR NEWCARD FUNCTION.
*/
function renderGame() {
    cardEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
      cardEl.textContent += cards[i] + ", ";
    };

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message;
}

// GENERATES NEW CARD AND OVERRIDES VARIABLES UNTIL CONDITION EVALS FALSE OR BLACKJACK.
function newCard() {
  if (isAlive && hasBlackJack === false) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
};
