const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
                    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
                    "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
                    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
                    "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
                    "(",")","_","-","+","=","{","[","}","]",",","|",":",";",
                    "<",">",".","?","/"];


// Generate two random passwords when the user clicks the button
// Each password should be 15 characters long

// STRETCH GOALS: Ability to set password length, copy-on-click, toggle symbols/nums in password.

const passwordBoxLeft = document.getElementById('password-box--left');
const passwordBoxRight = document.getElementById('password-box--right');

let passwordLeft = [];
let passwordRight = [];
let passwordLength = 15;

function generatePassword() {
  for (let i = 0; i < passwordLength; i++) {
    let leftPW = characters[Math.floor(Math.random() * characters.length)];
    let rightPW = characters[Math.floor(Math.random() * characters.length)];
    passwordLeft[i] = leftPW;
    passwordRight[i] = rightPW;
  };

  passwordBoxLeft.textContent = passwordLeft.join('');
  passwordBoxRight.textContent = passwordRight.join('');
};
