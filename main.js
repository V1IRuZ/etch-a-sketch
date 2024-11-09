const container = document.querySelector(".container");
const btn = document.querySelector("button");

function getSquares() {
    let answer = prompt("Enter the number of squares you want the grid to have per side (maximum amount allowed is 50). ");
    if (answer > 0 && answer <= 50) {
        return answer;
    } else {
        return answer = 16;
    }
}

btn.addEventListener('click', () => {
    const amountOfSquares = getSquares();
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    getGrid(amountOfSquares);
    getHoverEffect();
});

function getGrid (amount = 16) {
    let size = 800 / amount;
    let grid = amount ** 2;
    for (box = 0; box < grid; box++) {
        const div = document.createElement("div");
        div.classList.add("box");
        div.style.cssText = `width: ${size}px; height: ${size}; border: 2px`;
        container.appendChild(div);
    }
}

function getHoverEffect() {
    const squares = document.querySelectorAll("div.box");
    squares.forEach((square) => {
        square.addEventListener('mouseenter',(e) => {
            e.target.style.background = "blue";
        });
    });
}

getGrid();
getHoverEffect();

