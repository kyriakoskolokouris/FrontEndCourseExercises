const container = document.querySelector(".container");
const btnContainer = document.querySelector(".buttons");
const resetBtn = document.createElement("button");
document.body.append(resetBtn);
resetBtn.textContent = "Clear Screen!";
btnContainer.appendChild(resetBtn);


function createGrid(cols, rows) {
    for(let i = 0; i < (cols * rows); i++){
        const div = document.createElement("div");
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add("square");
    }
}

  createGrid(16, 16);

function etchIt() {
    const squares = container.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", () => {
        square.style.background = "black";
    } ))
}

etchIt();

function resetSketch(){
    const squares = container.querySelectorAll(".square");
    squares.forEach(square => square.remove())
}

resetBtn.addEventListener("click", () => {
    resetSketch();
    // location.reload();
    let userSelection = prompt("Choose how many grids?");
    if (userSelection === null || userSelection < 1 || userSelection > 64) {
        resetSketch();
        createGrid(16, 16);
        etchIt();
    } else {
        createGrid(userSelection, userSelection);
        etchIt();
    }
})
