console.clear();

let mArray = [1, 2, 3, 4, 5];
let mArray2 = [6, 7, 8];

let mArray3 = [0, ...mArray, ...mArray2, 9];

console.log(mArray3);

let mObj1 = {
    name: 'Jhon',
    lastName: 'Doe'
};

let mObj2 = {
    age: 25
};

let mObj3 = {...mObj1, ...mObj2};

console.log(mObj3);