var grid = document.querySelector(".grid");
var resultsDisplay = document.querySelector(".results");
var currentShooterIndex = 202;
var width = 15;
var direction = 1;
var invaderId;
var goingRight = true;
for (var i = 0; i < 255; i++) {
    var square = document.createElement("div");
    grid.appendChild(square);
}
//2345
var squares = Array.from(document.querySelectorAll(".grid div"));
console.log(squares);
var alienInvaders = [
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
function draw() {
    for (var i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.add("invader");
    }
}
draw();
function remove() {
    for (var i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.remove("invader");
    }
}
squares[currentShooterIndex].classList.add("shooter");
function moveShooter(e) {
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
function moveInvaders() {
    var leftEdge = alienInvaders[0] % width === 0;
    var rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1;
    remove();
    if (rightEdge && goingRight) {
        for (var i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width + 1;
            direction = -1;
            goingRight = false;
        }
    }
    if (leftEdge && !goingRight) {
        for (var i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width - 1;
            direction = 1;
            goingRight = true;
        }
    }
    for (var i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += direction;
    }
    draw();
    if (squares[currentShooterIndex].classList.contains("invader", "shooter")) {
        resultsDisplay.innerHTML = "Game Over";
        clearInterval(invaderId);
        console.log("Game Over");
    }
}
invaderId = setInterval(moveInvaders, 100);
