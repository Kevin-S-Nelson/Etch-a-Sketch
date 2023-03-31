const container = document.querySelector('.container');
const startingPixelSize = 5;
const startingGridSize = 16;
let gridSize = 16;

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);
        for (let j = 0; j < gridSize; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            let pixelSize = startingPixelSize * (startingGridSize/gridSize);
            pixel.style.height = pixelSize + "vmin";
            pixel.style.width = pixelSize + "vmin";
            column.appendChild(pixel);
            pixel.addEventListener("mousemove", addColor);
            function addColor() {
                pixel.style.backgroundColor = "#000000";
            }
        }   
    }
}

function changeGridSize() {
    removeGrid();
    const userInput = prompt("Please enter a number between 1 and 100:")
    if (userInput < 1) {
        gridSize = 1;
    } else if (userInput > 100) {
        gridSize = 100;
    } else {
        gridSize = userInput;
    }
    createGrid();
}

function removeGrid() {
    container.innerHTML = "";
}

createGrid();