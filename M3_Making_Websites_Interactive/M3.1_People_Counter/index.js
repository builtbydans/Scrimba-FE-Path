// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById('count');

// intialize the count as 0
let count = 0;

// increment the count variable when the button is clicked
function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let saveCount = count + '-';
  // 3. Render the variable in the saveEl using innerText
  let save = document.getElementById('save-el');
  // NB: Make sure to not delete the existing content of the paragraph
  save.textContent += saveCount;
  // Set count back to 0
  countEl.innerText = '0';
  count = 0;
}
