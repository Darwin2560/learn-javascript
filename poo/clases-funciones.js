function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;

    this.imprimer = function() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

const p1 = new Persona('Juan', 25);
const p2 = new Persona('Maria', 30);

p1.imprimer();
p2.imprimer();

console.log(p1.nombre);
