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
        }   
    }
}

createGrid();

function removeGrid() {
    container.innerHTML = "";
}

function changeGridSize() {
    removeGrid();
    gridSize = 100;
    console.log("girdSize = " + gridSize);
    createGrid();
}