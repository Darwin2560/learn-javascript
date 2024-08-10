// import '../css/styles.css';
import wblogo from '../img/webpack_logo.png';

export const saludar = (nombre) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}!`;
    document.body.append(h1);
    
    const img = document.createElement('img');
    h1.src = wblogo;
    document.body.append(img);
}