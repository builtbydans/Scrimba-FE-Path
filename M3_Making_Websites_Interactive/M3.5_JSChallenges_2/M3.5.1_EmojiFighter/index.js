const fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

const stageEl = document.getElementById("stage")
const fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
  const randomFighter1 = fighters[Math.floor(Math.random() * fighters.length)];
  const randomFighter2 = fighters[Math.floor(Math.random() * fighters.length)];

  stageEl.innerHTML = `${randomFighter1} VS ${randomFighter2}`;
});
