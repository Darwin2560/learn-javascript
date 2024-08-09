class Persona{

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimer(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

const p1 = new Persona('Juan', 25);
const p2 = new Persona('Roel', 34);

console.log(p1);
console.log(p2);
p1.imprimer();