const grid = document.querySelector('.grid');
let size = 32;

function createGrid(size) {
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.backgroundColor = 'black';
            cell.style.opacity = '0';
            cell.style.width = (grid.offsetWidth / size) + "px";
            cell.style.height = (grid.offsetHeight / size) + "px";
            grid.appendChild(cell);
        }
    }
    let cells = Array.from(document.querySelectorAll('.cell'));
    cells.forEach(cell => cell.onmouseover = function () {
        if (cell.style.opacity === '0') {
            cell.style.opacity = '0.25';
        } else if (cell.style.opacity === '0.25') {
            cell.style.opacity = '0.5';
        } else if (cell.style.opacity === '0.5') {
            cell.style.opacity = '0.75';
        } else {
            cell.style.opacity = '1';
        }
    });
}

document.onload = createGrid(size);

function clearGrid() {
    let cells = Array.from(document.querySelectorAll('.cell'));
    cells.forEach(cell => cell.style.opacity = '0');
}

function resizeGrid() {
    let newSize = prompt('How many squares per side? [Max size: 64]','32');
    if (newSize < 1 || newSize > 64 || isNaN(newSize)) {
        alert(`${newSize} is not a valid size.`);
        return;
    }
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    createGrid(newSize);
}