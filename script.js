const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    container.appendChild(column);
    for (let j = 0; j < 16; j++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.textContent = " ";
        column.appendChild(pixel);
    }   
}