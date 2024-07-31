let array = ['ALex', 'Roel', 23, 100]
array[1] = 'Juan';
array.push('Pedro');
array.unshift('Maria'); // agrega al principio del array

console.log(array)

// borrar un elemento del array
array.shift(); // borra el elemento en la posición 1
console.log(array)

array.pop(); // borra el último elemento del array
console.log(array)

console.log(array.length); // devuelve la longitud del array

console.log(array.indexOf(23)); // devuelve la posición del primer elemento 23 en el array
