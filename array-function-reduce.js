console.clear();

const numArr = [1, 2, 3, 4, 5];

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

const result = mArr.reduce((acc, item) => {
    console.log(item.experience)
    // console.log(acc)
    return acc + item.experience;
}, 0)

console.log(result); // 15