const movable = document.getElementById('cuadrado');//obtiene el element y lo almacena este sera el que se mueve
const movable2 = document.getElementById('cuadrado2');
let position = { top: 0, left: 0 };//inicialzan en 0 rastrean la posicion   

function mover(dx, dy) {//obtiene dos parametros horizontal y vertical
    position.top += dy;// si es positivo se mueve haia abajo, si es - hacia arriba
    position.left += dx;//si es sitivo se mueve hacia la derecha si es - izquierda
    movable.style.top = position.top + 'px';// se establece el CSS y se declara que es en pxeles 
    movable.style.left = position.left + 'px';//iual que arriba
}

document.addEventListener('keydown', (event) => {//ha traves del evento detecta la tecla presionada 
    switch(event.key) {//switch para evaluar la prodiedad 
        case 'ArrowUp':// se actva en caso de presionar la fllecha de arriba
        
        mover(0, -10);// si se cumple llama a la funcon y lo mueve 10px arriba
            break;
        case 'ArrowDown':// se actva en caso de presionar la fllecha de ABAJO
       
        mover(0, 10);// si se cumple llama a la funcon y lo mueve 10px abajo
            break;
        case 'ArrowLeft':// se actva en caso de presionar la flecha de la izquierda
        
        mover(-10, 0);// si se cumple llama a la funcon y lo mueve 10px izquierda
            break;
        case 'ArrowRight':// se actva en caso de presionar la flecha de la derecha
        
        mover(10, 0);// si se cumple llama a la funcon y lo mueve 10px derecha
            break;
    }
});
function mover2(dx, dy) {//obtiene dos parametros horizontal y vertical
    position.top += dy;// si es positivo se mueve haia abajo, si es - hacia arriba
    position.left += dx;//si es sitivo se mueve hacia la derecha si es - izquierda
    movable2.style.top = position.top + 'px';// se establece el CSS y se declara que es en pxeles 
    movable2.style.left = position.left + 'px';//iual que arriba
}

document.addEventListener('keydown', (event) => {//ha traves del evento detecta la tecla presionada 
    switch(event.key) {//switch para evaluar la prodiedad 
        case 'w':// se actva en caso de presionar la w
        mover2(0, -10);// si se cumple llama a la funcon y lo mueve 10px arriba
            break;
        case 's':// se actva en caso de presionar la s
        mover2(0, 10);// si se cumple llama a la funcon y lo mueve 10px abajo
            break;
       
        case 'a':// se actva en caso de presionar la a
        mover2(-10, 0);// si se cumple llama a la funcon y lo mueve 10px izquierda
            break;
       
        case 'd':// se actva en caso de presionar la d
        mover2(10, 0);// si se cumple llama a la funcon y lo mueve 10px derecha
            break;
    }
});