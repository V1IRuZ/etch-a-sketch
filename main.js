const container = document.querySelector(".container");
const btn = document.querySelector("button");

function getSquares() {
    let answer = prompt("Enter the number of squares you want the grid to have per side (the maximum amount allowed is 100). ");
    if (answer > 0 && answer <= 100) {
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

function getGrid (amountOfSquaresPerSide = 16) {
    let size = 800 / amountOfSquaresPerSide;
    let grid = amountOfSquaresPerSide ** 2;
    for (box = 0; box < grid; box++) {
        const div = document.createElement("div");
        div.classList.add("box");
        div.style.cssText = `width: ${size}px; height: ${size}; border: 2px;`;
        container.appendChild(div);
    }
}

function getRandomColor(){
    const arrayOfColorOptions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    let randomColorString = '#';

    for (let i = 0; i < 6; i++){

        let index = Math.floor(Math.random() * 16);
        let value = arrayOfColorOptions[index];
    
        randomColorString += value;
    }
    return randomColorString;
}

function getHoverEffect() {
    const squares = document.querySelectorAll("div.box");
    squares.forEach((square) => {
        square.addEventListener('mouseenter',(e) => {
            let randomColor = getRandomColor();
            e.target.style.backgroundColor = `${randomColor}`;
        });
    });
}

getGrid();
getHoverEffect();

