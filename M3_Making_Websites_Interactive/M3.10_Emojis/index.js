const emojiContainer = document.getElementById("emojiContainer");
const myEmojis = ["👨‍💻", "⛷", "🍲"];
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const emojiInput = document.getElementById("emoji-input");
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderNewEmojis() {
  emojiContainer.innerHTML = "";
  for (let i = 0; i < myEmojis.length; i++) {
    emojiContainer.innerHTML += `<span> ${myEmojis[i]} </span>`;
  };
}

renderNewEmojis();

pushBtn.addEventListener("click", function() {
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value)
    emojiInput.value = ""
    emojiContainer.innerHTML = "";
  }
  renderNewEmojis();
});

unshiftBtn.addEventListener("click", function() {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value)
    emojiInput.value = ""
    emojiContainer.innerHTML = "";
  }
  renderNewEmojis();
});

popBtn.addEventListener("click", function() {
  myEmojis.pop();
  renderNewEmojis()
});

shiftBtn.addEventListener("click", function() {
  myEmojis.shift();
  renderNewEmojis()
});
