let numPares = [];
let numImpares = [];
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numerosRandom = 0;
for (let n of numeros) {
    numerosRandom = parseInt(Math.random() * 100);
    let result = n * numerosRandom;

    if (result % 2 === 0) {
        console.log(`${n} x ${numerosRandom} = ${result} (Par)`);
        numPares.push(result);
    } else {
        console.log(`${n} x ${numerosRandom} = ${result} (Impar)`);
        numImpares.push(result);
    }
}


console.log(`Números pares: ${numPares}`);
console.log(`Números impares: ${numImpares}`);
