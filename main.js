const container = document.querySelector(".container");


function getGrid () {
    let num = 16;
    let size = 800 / num;
    let grid = num * num;
    for (box = 0; box < grid; box++) {
        const div = document.createElement("div");
        div.classList.add("box");
        div.style.cssText = `width: ${size}px; height: ${size}; border: 2px solid black;`;
        container.appendChild(div);
    }
}

getGrid();

const squares = document.querySelectorAll("div.box")
squares.forEach((square) => {
    square.addEventListener('mouseenter',(e) => {
        e.target.style.background = "blue";
    });
});

