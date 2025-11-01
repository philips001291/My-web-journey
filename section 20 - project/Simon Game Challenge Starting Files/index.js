let buttonColors = ["red", "blue", "green", "yellow"];
let randomChosenColor;
let gamePattern = [];
function nextSequence() {
  const randomDecimal = Math.floor(Math.random() * 3);
  randomChosenColor = buttonColors[randomDecimal];
  gamePattern.push(randomChosenColor);
}
document.addEventListener("DOMContentLoaded", () => {
  alert("Hello");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "a" || event.key === "A") {
    console.log("Pritisnuo si A!");
    // ovde ide tvoj kod, npr:
    // nextSequence();
  }
});