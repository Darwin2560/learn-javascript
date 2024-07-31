let n = 5, print = '';
if (n !== 0) {
    if (n > 0) {
        if (n % 2 === 0) {
            print = `El número ${n} es par positivo.`;
        } else {
            print = `El número ${n} es impar positivo.`;
        }
    } else {
        if (n % 2 === 0) {
            print = `El número ${n} es par negativo.`;
        } else {
            print = `El número ${n} es impar negativo.`;
        }
    }
} else {
    print = 'El número es cero.';
}

console.log(print); // El número 5 es impar.
