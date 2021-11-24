const board = document.querySelector("#board");
const colors = [
  "#F13391",
  "#blF2DF40",
  "#5B17FC",
  "#3FA1D2",
  "#82BF82",
  "#088F2A",
  "#254085",
  "#C7010B",
];
const SQUARES_NUMBER = 460;
for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  square.classList.add("square");
  board.append(square);
}
function setColor(el) {
  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(el) {
  el.style.backgroundColor = "#1d1d1d";
  el.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
