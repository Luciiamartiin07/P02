const zapa = document.getElementById('zapa');
const luci = document.getElementById('luci');

// Obtén la posicion
let position1 = {
    top: parseInt(window.getComputedStyle(zapa).top) || 0,//1
    left: parseInt(window.getComputedStyle(zapa).left) || 0,
};
let position2 = {
    top: parseInt(window.getComputedStyle(luci).top) || 0,
    left: parseInt(window.getComputedStyle(luci).left) || 0,
};

function mover(dx, dy) {
    position1.top += dy;
    position1.left += dx;
    zapa.style.top = position1.top + 'px';
    zapa.style.left = position1.left + 'px';
}

function mover2(dx, dy) {
    position2.top += dy;
    position2.left += dx;
    luci.style.top = position2.top + 'px';
    luci.style.left = position2.left + 'px';
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
