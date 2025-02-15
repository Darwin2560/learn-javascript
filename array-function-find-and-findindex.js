console.clear();

const numArr = [-1, -2, -3, -4, 1, 2, 3, 4];

// const result = numArr.find(item => {
//     return item % 2 === 0 && item >= 0;
// })

const result = numArr.findIndex(item => {
    return item % 2 === 0 && item >= 0;
})

console.log(result);