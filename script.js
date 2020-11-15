const playArea = document.querySelector('#playArea');

createDefaultPlayArea();
configurePlayArea();

const button = document.querySelector('#clear');

button.addEventListener('click', () => {
    while (playArea.firstChild) {
        playArea.removeChild(playArea.firstChild);
    }
    createCustomPlayArea(prompt('Grid size:'));
    configurePlayArea();
});

function configurePlayArea() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', paintSquare(square));
    });
}

function clearPlayArea(playArea) {
    while(playArea.firstChild) {
        playArea.remove(playArea.firstChild);
    }
}

function paintSquare(square) {
    return () => {
        square.classList.add('painted');
    };
}

function createDefaultPlayArea() {
    for (let i = 1; i <= 16; i++) {
        let divRow = document.createElement('div');
        divRow.classList.add('row');
        for (let j = 1; j <= 16; j++) {
            let divSquare = document.createElement('div');
            divSquare.classList.add('square');
            divRow.appendChild(divSquare);
        }
        playArea.appendChild(divRow);
    }
}

function createCustomPlayArea(size) {
    for (let i = 1; i <= size; i++) {
        let divRow = document.createElement('div');
        divRow.classList.add('row');
        for (let j = 1; j <= size; j++) {
            let divSquare = document.createElement('div');
            divSquare.classList.add('square');
            divRow.appendChild(divSquare);
        }
        playArea.appendChild(divRow);
    }
}

