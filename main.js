const container = document.querySelector(".container");

let grid = 16 * 16;
for (box = 0; box < grid; box++) {
    const div = document.createElement("div");
    div.classList.add("box");

    container.appendChild(div);
}

