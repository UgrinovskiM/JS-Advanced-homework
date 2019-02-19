let obj = {}
function Person({ name, lastName, yearOfBirth, hometown }) {
    this.name = name
    this.lastName = lastName
    this.yearOfBirth = yearOfBirth
    this.hometown = hometown
}

Person.prototype.sayFullName = function () {
    return `I am ${this.name} ${this.lastName}.`
}

Person.prototype.age = function () {
    return `I am ${2019 - this.yearOfBirth} years old.`
}
let M = new Person({ name: "Marjan", lastName: 'Ugrinovski', yearOfBirth: 1991, hometown: 'Skopje' })
console.log(M)
console.log(M.sayFullName())
console.log(M.age())

// function Trainer(){
//     let {course, yearsOfTeaching} = obj
//     course
//     yearsOfTeaching
//     Person.call(this, obj)
// }
// let t = new Trainer('')
// console.log(t)

let arr = [1, '3', { num: 7 }, 8, 'FunFunFunction', 10, () => `I'm a number`, 33];
let arrNum = [];
function getSumOfNumbers() {
    for (i = 0; i < arr.length; i++) {
        if (i !== isNaN()) {
            arrNum.push(i);
        }
    }
}
getSumOfNumbers(arr)
console.log(arrNum)