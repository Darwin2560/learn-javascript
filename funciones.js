
// function declaration and arguments
function saludar(nombre) {
    // console.log(`Hola, ${nombre} desde la funciona saludar!`);
    return `Hola, ${nombre} desde la funciona saludar!`
}

saludo = saludar('Jhon');
console.log(saludo); // Hola, Jhon desde la función saludar!


// function with arguments default
function sumar(a=null, b=null) {
    if (a === null || b === null) {
        console.log('Debes proporcionar dos valores numéricos');
        return 0;
    }
    return a + b;
}

console.log(sumar(2, 3)); // 5
