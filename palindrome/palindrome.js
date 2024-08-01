const palindrome = (palabra) => {
    palabra = palabra.replace(' ', '');
    palabra = palabra.toLowerCase();

    let palabraInvertida = palabra.split('').reverse().join('');

    if (palabra === palabraInvertida) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome('ana'))