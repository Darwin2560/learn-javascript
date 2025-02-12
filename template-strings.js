console .clear();

const firstName = 'Jhon'
const lastName = 'Lark'

function getFullName(firstName, lastName) { return firstName + ' ' + lastName; }

const mGreetings = `Hello ${getFullName(firstName, lastName) + 100}`;

console.log(mGreetings); // Hello Jhon Lark 100

// rgba(red, green, blue, aplha)

let red = 200
let green = 155
let blue = 100
let aplha = 0.8

const rgbaExp = `rgba(${red}, ${green}, ${blue}, ${aplha})`;

console.log(rgbaExp); // rgba(200, 155, 100, 0.8)
