const cuadrado1 = document.getElementById('zapa');
const cuadrado2 = document.getElementById('luci');
const enemigo= document.getElementById('enemigo')

let position1 = {
    top: parseInt(window.getComputedStyle(cuadrado1).top) || 0,
    left: parseInt(window.getComputedStyle(cuadrado1).left) || 0,
};
let position2 = {
    top: parseInt(window.getComputedStyle(cuadrado2).top) || 0,
    left: parseInt(window.getComputedStyle(cuadrado2).left) || 0,
};

let position3 = {
    top: parseInt(window.getComputedStyle(enemigo).top) || 0,
    left: parseInt(window.getComputedStyle(enemigo).left) || 0,
};

let canMove1 = true; // Bandera para permitir movimiento de cuadrado1
let canMove2 = true; // Bandera para permitir movimiento de cuadrado2

function mover(dx, dy) {
    if (!canMove1) return; // Si está bloqueado, no se mueve
    position1.top += dy;
    position1.left += dx;
    cuadrado1.style.top = position1.top + 'px';
    cuadrado1.style.left = position1.left + 'px';
    checkCollision();
}

function mover2(dx, dy) {
    if (!canMove2) return; // Si está bloqueado, no se mueve
    position2.top += dy;
    position2.left += dx;
    cuadrado2.style.top = position2.top + 'px';
    cuadrado2.style.left = position2.left + 'px';
    checkCollision();
}

function checkCollision() {
    //obtiene las dimensiones de los coches 
    const cuadrado1Width = cuadrado1.offsetWidth;
    const cuadrado1Height = cuadrado1.offsetHeight;
    const enemigoWidth = enemigo.offsetWidth;
    const enemigoHeight = enemigo.offsetHeight;

    if (
        position1.left < position3.left + enemigoWidth &&//verifica si el lado izquierdo del coche está antes del lado derecho
        position1.left + cuadrado1Width > position3.left &&//verifica si el lado derecho del coche está antes del lado izquierdo
        position1.top < position3.top + enemigoHeight &&///verifica si el lado superior del coche está antes del lado inferior
        position1.top + cuadrado1Height > position3.top///verifica si el lado inferior del coche está antes del lado superior
    ) {
        alert('Colisión detectada');
        // Bloquear movimiento de ambos por 5 segundos
        canMove1 = false;
        

        setTimeout(() => {
            canMove1 = true;
            

            alert('Movimiento desbloqueado');
        }, 5000); // 5 segundos
    }
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
