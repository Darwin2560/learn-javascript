console.clear();

const mArr = [
    {
        name: 'Jhon Lark',
        experience: 10,
        type: 'commercial'
    },
    {
        name: 'Maria Sue',
        experience: 5,
        type: 'technical'
    },
    {
        name: 'Bob Johnson',
        experience: 8,
        type: 'commercial'
    }
];

// let newArr = [];

// const dobleValues = (item) => {
//     return item * 2;
// };

// for(let i = 0; i < mArr.length; i++) {
//     newArr.push(dobleValues(mArr[i]));
// }

let newArr = mArr.map((data, key) => {
    console.log(data); 
    return {
        name: data.name,
        experience: data.experience
    };
})

console.log(newArr); // Output: [2, 4, 6, 8, 10]