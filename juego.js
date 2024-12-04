const cuadrado1 = document.getElementById('cuadrado');
const cuadrado2 = document.getElementById('cuadrado2');

// Obtén la posicion
let position1 = {
    top: parseInt(window.getComputedStyle(cuadrado1).top) || 0,//1
    left: parseInt(window.getComputedStyle(cuadrado1).left) || 0,
};
let position2 = {
    top: parseInt(window.getComputedStyle(cuadrado2).top) || 0,
    left: parseInt(window.getComputedStyle(cuadrado2).left) || 0,
};

function mover(dx, dy) {
    position1.top += dy;
    position1.left += dx;
    cuadrado1.style.top = position1.top + 'px';
    cuadrado1.style.left = position1.left + 'px';
}

function mover2(dx, dy) {
    position2.top += dy;
    position2.left += dx;
    cuadrado2.style.top = position2.top + 'px';
    cuadrado2.style.left = position2.left + 'px';
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            mover(0, -10);
            break;
        case 'ArrowDown':
            mover(0, 10);
            break;
        case 'ArrowLeft':
            mover(-10, 0);
            break;
        case 'ArrowRight':
            mover(10, 0);
            break;
    }
});

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            mover2(0, -10);
            break;
        case 's':
            mover2(0, 10);
            break;
        case 'a':
            mover2(-10, 0);
            break;
        case 'd':
            mover2(10, 0);
            break;
    }
});


//1-Obtiene los estilos aplicados, convierte los valores en pixeles , si no encuentra =||0 como valor predeterminado
