const persona = {
    'name': 'John Doe',
    'lastName': 'Smith',
    'age': 30,
    fullName() {
        return `${this.name} ${this.lastName}`;
    },
    address: {
        'street': '123 Main St',
        'city': 'New York',
        'state': 'NY'
    },
    hobbies: ['reading', 'painting', 'cooking']
}

console.log(persona)
console.log(persona.fullName())
console.log(persona.address.street)


