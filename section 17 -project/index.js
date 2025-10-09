var randomDecimal = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
document
  .querySelector(".img1")
  .setAttribute("src", `./images/dice${randomDecimal}.png`);
var randomDecimal2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
document
  .querySelector(".img2")
  .setAttribute("src", `./images/dice${randomDecimal2}.png`);

if (randomDecimal < randomDecimal2) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
} else if (randomDecimal == randomDecimal2) {
  document.querySelector("h1").textContent = "Draw!";
} else {
  document.querySelector("h1").textContent = "Player 1 Wins!";
}
