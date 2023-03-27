const container = document.querySelector('.container');

let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    container.appendChild(column);
    for (let j = 0; j < gridSize; j++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.textContent = " ";
        column.appendChild(pixel);
    }   
}