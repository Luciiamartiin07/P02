//Declaro las variables
const cuadrado1 = document.getElementById('zapa');
const cuadrado2 = document.getElementById('luci');

const enemigo= document.getElementById('patoZapa');
const enemigo2= document.getElementById('patoLuci');


const enemigo3= document.getElementById('patoZapa2');
const enemigo4= document.getElementById('patoLuci2');

const meta= document.getElementById('meta');

alert("Instrucciones:\n-1er Jugador: W-A-S-D\n-2do Jugador: Flechas de dirección\n-Prohibido mantener las teclas\n-Seguir la carretera\n\n😆Suerte🍀");



//Cuadrado1
let position1 = {
    top: parseInt(window.getComputedStyle(cuadrado1).top) || 0,//obtiene la posi vertival
    left: parseInt(window.getComputedStyle(cuadrado1).left) || 0,//obtiene la posi horizontal 
};
//Cuadrado2
let position2 = {
    top: parseInt(window.getComputedStyle(cuadrado2).top) || 0,
    left: parseInt(window.getComputedStyle(cuadrado2).left) || 0,
};
//Enemigo1
let position3 = {
    top: parseInt(window.getComputedStyle(enemigo).top) || 0,
    left: parseInt(window.getComputedStyle(enemigo).left) || 0,
};
//Enemigo2
let position4 = {
    top: parseInt(window.getComputedStyle(enemigo2).top) || 0,
    left: parseInt(window.getComputedStyle(enemigo2).left) || 0,
};
//Enemigo3
let position5 = {
    top: parseInt(window.getComputedStyle(enemigo3).top) || 0,
    left: parseInt(window.getComputedStyle(enemigo3).left) || 0,
};
//Enemigo4
let position6 = {
    top: parseInt(window.getComputedStyle(enemigo4).top) || 0,
    left: parseInt(window.getComputedStyle(enemigo4).left) || 0,
};

let position7 = {
    top: parseInt(window.getComputedStyle(meta).top) || 0,
    left: parseInt(window.getComputedStyle(meta).left) || 0,
};
//Creo dos variables que indican  a los jugadores si pueden moverse 
let canMove1 = true; 
let canMove2 = true; 

function mover(dx, dy) {
    if (!canMove1) return; // Si está bloqueado, no se mueve
    position1.top += dy;//Modifica la posición vertical
    position1.left += dx;//// Modifica la posción horizonta
    cuadrado1.style.top = position1.top + 'px';// Muestra la nueva posición 
    cuadrado1.style.left = position1.left + 'px';
    checkCollision();//Verifica si hay colisiones después del movimiento
}

function mover2(dx, dy) {
    if (!canMove2) return; 
    position2.top += dy;
    position2.left += dx;
    cuadrado2.style.top = position2.top + 'px';
    cuadrado2.style.left = position2.left + 'px';
    checkCollision();
}
//funcion para verificar la colison entre los jugaodres y los enemigos 
function checkCollision() {
    // Obtiene las dimensiones de los coches 
    const cuadrado1Width = cuadrado1.offsetWidth;
    const cuadrado1Height = cuadrado1.offsetHeight;
    const cuadrado2Width = cuadrado2.offsetWidth;
    const cuadrado2Height = cuadrado2.offsetHeight;

    const enemigoWidth = enemigo.offsetWidth;
    const enemigoHeight = enemigo.offsetHeight;

    const enemigo2Width = enemigo2.offsetWidth;
    const enemigo2Height = enemigo2.offsetHeight;

    const enemigo3Width = enemigo3.offsetWidth;
    const enemigo3Height = enemigo3.offsetHeight;

    const enemigo4Width = enemigo4.offsetWidth;
    const enemigo4Height = enemigo4.offsetHeight;

    const metaWidth = meta.offsetWidth;
    const metaHeight = meta.offsetHeight;

    // Colision entre cuadrado1 y enemigo
    if (
        position1.left < position3.left + enemigoWidth &&///verifica si el lado izquierdo del coche está antes del lado derecho
        position1.left + cuadrado1Width > position3.left &&///verifica si el lado derecho del coche está antes del lado izquierdo
        position1.top < position3.top + enemigoHeight &&///verifica si el lado superior del coche está antes del lado inferior
        position1.top + cuadrado1Height > position3.top///verifica si el lado inferior del coche está antes del lado superior
    ) {
        console.log('Cuadrado1 colisionó con enemigo');
        canMove1 = false;//para bloquear el movimiento 

        setTimeout(() => {
            canMove1 = true;
            console.log('Movimiento de cuadrado1 desbloqueado');
        }, 500); 
    }

    // Colision entre cuadrado2 y enemigo2
    if (
        position2.left < position4.left + enemigo2Width &&
        position2.left + cuadrado2Width > position4.left &&
        position2.top < position4.top + enemigo2Height &&
        position2.top + cuadrado2Height > position4.top
    ) {
        console.log('Cuadrado2 colisionó con enemigo2');
        canMove2 = false;

        setTimeout(() => {
            canMove2 = true;
            console.log('Movimiento de cuadrado2 desbloqueado');
        }, 500); // 5 segundos
    }

     // Colision entre cuadrado1 y enemigo3
     if (
        position1.left < position5.left + enemigo3Width &&
        position1.left + cuadrado1Width > position5.left &&
        position1.top < position5.top + enemigo3Height &&
        position1.top + cuadrado1Height > position5.top
    ) {
        console.log('Cuadrado1 colisionó con enemigo');
        canMove1 = false;

        setTimeout(() => {
            canMove1 = true;
            console.log('Movimiento de cuadrado1 desbloqueado');
        }, 5000); 
    }

    // Colision entre cuadrado2 y enemigo4
    if (
        position2.left < position6.left + enemigo4Width &&
        position2.left + cuadrado2Width > position6.left &&
        position2.top < position6.top + enemigo4Height &&
        position2.top + cuadrado2Height > position6.top
    ) {
        console.log('Cuadrado2 colisionó con enemigo2');
        canMove2 = false;

        setTimeout(() => {
            canMove2 = true;
            console.log('Movimiento de cuadrado2 desbloqueado');
        }, 5000);
    }
   
    //Colision meta 
    if (
        position1.left < position7.left + metaWidth &&
        position1.left + cuadrado1Width > position7.left &&
        position1.top < position7.top + metaHeight &&
        position1.top + cuadrado1Height > position7.top
    ) {
        alert("Alejandrooo ha gando");
        location.reload();
    }

    if (
        position2.left < position7.left + metaWidth &&
        position2.left + cuadrado2Width > position7.left &&
        position2.top < position7.top + metaHeight &&
        position2.top + cuadrado2Height > position7.top
    ) {
        alert("Luciaaa ha gando");
        location.reload();
    }
    
}

//Para detectar las teclas, concretamente las flechas 
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
// para detectar las teclas, W-A-S-D
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
