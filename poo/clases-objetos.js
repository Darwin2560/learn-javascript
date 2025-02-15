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

const john = new Person('John', 2000)
console.log(john.getDetails());