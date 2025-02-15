console.clear();

class Person {

    constructor(name, birthYear){
        this.name = name;
        this.yearOfBirth = birthYear;
    }

    getDetails = () => {
        return `Name: ${this.name} and
        Age: ${2025 - this.yearOfBirth}`
    } 
}

// inheritance
class Pilot extends Person{

    constructor(name, birthYear, exp, type, license){
        super(name, birthYear);
        this.experience = exp;
        this.type = type;
        this.license = license;
    }

    getData = () => {
        console.log(`${this.getDetails()} and 
        Experience ${this.experience} and 
        Type: ${this.type}`);
    }
}

const dar = new Pilot('Darwin Ruiz', 2000, 8, 'private', 'TC1234');
console.log(dar);
dar.getData();
