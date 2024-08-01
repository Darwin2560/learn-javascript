function sumar(...args) {
    console.log(args);
    sum = 0;
    for (let n of args) {
        sum += n;
    }
    console.log(`La suma es: ${sum}`);
}

sumar(2, 3, 4, 5);
