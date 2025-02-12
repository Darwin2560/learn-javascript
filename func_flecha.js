console.clear();

const sumar = (a,b)=>a+b;
console.log(sumar(2,3)); // 5

const saludar = () => {
    console.log('Hola!');
}

saludar();

// other examples

function greeting(name) {
    return `Hello ${name}`
}

console.log(greeting('John Doe'));

const mGreeting = name => `Hello ${name}`

console.log(mGreeting('Jane Doe'));
