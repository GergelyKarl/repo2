const grid = document.querySelector(".grid");
const resultsDisplay = document.querySelector(".results");
let currentShooterIndex: number = 202;
let width: number = 15;
let direction: number = 1;
let invaderId: any;
let goingRight: boolean = true;
for (let i = 0; i < 255; i++) {
  const square = document.createElement("div");
  grid.appendChild(square);
}
//2345
const squares = Array.from(document.querySelectorAll(".grid div"));
console.log(squares);

const alienInvaders = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
];

function draw(): void {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.add("invader");
  }
}

draw();

function remove(): void {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove("invader");
  }
}

squares[currentShooterIndex].classList.add("shooter");

function moveShooter(e: any): void {
  squares[currentShooterIndex].classList.remove("shooter");
  switch (e.key) {
    case "ArrowLeft":
      if (currentShooterIndex % width !== 0) {
        currentShooterIndex -= 1;
        break;
      }
    case "ArrowRight":
      if (currentShooterIndex % width < width - 1) {
        currentShooterIndex += 1;
        break;
      }
  }
  squares[currentShooterIndex].classList.add("shooter");
}

document.addEventListener("keydown", moveShooter);

function moveInvaders(): void {
  const leftEdge: boolean = alienInvaders[0] % width === 0;
  const rightEdge: boolean =
    alienInvaders[alienInvaders.length - 1] % width === width - 1;
  remove();

  if (rightEdge && goingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width + 1;
      direction = -1;
      goingRight = false;
    }
  }
  if (leftEdge && !goingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width - 1;
      direction = 1;
      goingRight = true;
    }
  }

  for (let i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i] += direction;
  }
  draw();

  if (squares[currentShooterIndex].classList.contains("invader", "shooter")) {
    resultsDisplay.innerHTML = "Game Over";
    clearInterval(invaderId);
    console.log("Game Over");
  }

  for (let i = 0; i < alienInvaders.length; i++) {
    if (alienInvaders[i] > squares.length + width) {
      resultsDisplay.innerHTML = "Game Over";
    }
  }
}
invaderId = setInterval(moveInvaders, 100);
