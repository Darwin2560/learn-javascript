console.clear();

const mArr = [
    {
        name: 'Darwin',
        experience: 10,
        type: 'Commercial'
    },
    {
        name: 'William Shakespeare',
        experience: 20,
        type: 'Educational'
    },
    {
        name: 'Stephen King',
        experience: 5,
        type: 'Commercial'
    },
    {
        name: 'Franz Kafka',
        experience: 15,
        type: 'Educational'
    }
]

const result = mArr.filter(item => {
    console.log(item.experience);
    return item.experience < 10;
})

console.log(result);