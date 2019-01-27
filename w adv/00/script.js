function upToSomeNumber(someNumber) {
    // let sum = 0;
    // for (let index = 1; index <= someNumber; index++) {
    //     sum += index;
    // }
    // return sum;
    return someNumber * (someNumber +1) / 2;
}

console.log(`The sum up to 150 is ${upToSomeNumber(150)}`);
console.log(`Сумата до 200 is ${upToSomeNumber(200)}`);
console.log(`${upToSomeNumber(250)} up to 250 the sum is`);