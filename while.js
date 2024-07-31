
let n = 2, count = 0;

while (count <= 10) {
    console.log(`${count++}`);
}


let s = 0;

do {
    if (s === 3) {
        break;
        // continue; // saltar el resto del bloque y volver al principio del c
    }
    console.log('Running')
    s++;
}while(s < 5)