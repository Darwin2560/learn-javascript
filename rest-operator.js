console.clear();

// const mSum = (num1, num2) => console.log(num1 + num2);

const mSum = (num1, num2, ...args) => {
    console.log(num1); // 2
    console.log(num2); // 3
    console.log(args); // [4, 5]
    let sum = num1 + num2;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    console.log(sum);
}

mSum(2, 3, 4, 5); // 2, 3, 14
