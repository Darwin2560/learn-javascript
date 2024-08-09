class Persona{

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    destallePersona(){
        console.log(`Nombre: ${this.nombre},\ndad: ${this.edad}`);
    }
}

// Herencia de la clase Persona a la clase Empleados
class Empleado extends Persona{

    constructor(nombre, edad, puesto, sueldo){
        super(nombre, edad);
        this.puesto = puesto;
        this.sueldo = sueldo;
    }

    destallePersona(){
        super.destallePersona();
        console.log(`Puesto: ${this.puesto},\nSueldo: ${this.sueldo}`);
    }
}

const e1 = new Empleado('Juan', 25, 'Desarrollador', '5000 USD');
e1.destallePersona();
