
body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-image: url('imagenPO2.png');
    background-size: cover; /* Para que la imagen ocupe todo el fondo */
    background-repeat: no-repeat; /* PAra que no se repita */
    background-position: center center;
    display: flex;
    justify-content: center; 
    align-items: flex-start; 
}

.content {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center; 
    align-items: center;
    gap: 20px; 
}

#zapa, #luci {
    width: 100px; 
    height: 100px; 
    background-size: cover; 
    background-repeat: no-repeat;
    position: absolute; 
}

#luci {
    background-image: url('imagencochemitica.webp');
    top: 10px; 
    left: calc(50% - 400px); /* Centra y ajusta la posición */
}

#zapa {
    background-image: url('imagencoche.webp');
    top: 10px;
    right: calc(50% - 300px); /* Centra y ajusta la posición  */
}

#enemigo {
    background-image: url('patozapa.png');
    top: 10px;
    width: 50px; 
    height: 50px; 
    background-size: cover; 
    background-repeat: no-repeat;
    position: absolute; 
}
