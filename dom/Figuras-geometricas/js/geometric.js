//! Patron modular
const myModule = (() => {
    'use strict';
    // area y perimetro de un cuadrado
    const btnPerimSquare = document.getElementById('btnPerimetroSquare'),
    btnAreaSquare = document.getElementById('btnAreaSquare');
    const valueResult = document.getElementById('result')
    const perimSquare = (side) => side * 4;
    const areaSquare = (side) => side * side;
    
    btnPerimSquare.addEventListener('click', () => {
        let inputSide = Number(document.getElementById('inputSide').value);
        const result = `El perimetro del cuadrado es: ${perimSquare(inputSide)} cm`;
        valueResult.innerText = result;
    });
    
    btnAreaSquare.addEventListener('click',() => {
        let inputSide = Number(document.getElementById('inputSide').value);
        const result = `El área del cuadrado es: ${areaSquare(inputSide)} cm²`;
        valueResult.innerText = result;
    });

    /* return {
        cpq: calculatePerimSquare,
        caq: calculateAreaSquare
    }; */
})();

