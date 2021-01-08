//get the container node
const container = document.querySelector('.grid-container');

//generate initial 16x16 canvas
for (i=0; i<256; i++) {
    let div = document.createElement('div');
    div.className = `div-${i+1}`;
    div.id = '0';
    container.appendChild(div);
};

//get list of canvas cells
let boxes = [...document.querySelectorAll('.grid-container > div')];

//per cell, increase opacity by 0.1 when hovered over
boxes.forEach(box => {
    box.addEventListener('mouseenter', e => {
        box.style.backgroundColor =`rgb(${rand()}, ${rand()}, ${rand()})`
        
    });
});

//increase value by 1
const opacityUp = value => {
    switch (value) {
        case 'one':
            return 'two';
            break;
        case 'two':
            return 'three';
            break;
        case 'three':
            return 'four';
            break;
        case 'four':
            return 'five';
            break;
        case 'five':
            return 'six';
            break;
        case 'six':
            return 'seven';
            break;
        case 'seven':
            return 'eight';
            break;
        case 'eight':
            return 'nine';
            break;
        case 'nine':
            return 'ten';
            break;
        case 'ten':
            return 'ten';
            break;
        default:
            return 'one';
            break;
    }
}

//generate random value (0-255)
const rand = () => {
    return Math.floor(Math.random()*256);
}

const generateNewCanvas = (dim=16) => {
    boxes.forEach(box => container.removeChild(box));
    for (i=0; i<dim*dim; i++) {
        let div = document.createElement('div');
        div.className = `div-${i+1}`;
        container.appendChild(div);
        container.style.gridTemplateRows = `repeat(${dim}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
    }
    boxes = [...document.querySelectorAll('.grid-container > div')];
    boxes.forEach(box => {
        box.addEventListener('mouseenter', e => box.id = `${opacityUp(box.id)}`);
    });
    return;
};

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', e => {
    let dim = parseInt(prompt("new canvas width:"));
    if(typeof dim !== 'number') generateNewCanvas(16); //this doesn't catch string entries (probably bc they're being cast as ints anyways)
    if(!dim) return;
    else if(dim < 0) generateNewCanvas(16);
    else if(dim > 100) generateNewCanvas(100);
    else generateNewCanvas(dim);
});