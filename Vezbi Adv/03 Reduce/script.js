let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
// Practice Reduce

// Include how many of the potential voters were in the ages 18-25, 
// how many from 26-35, how many from 36-55, 
// and how many of each of those age ranges actually voted. 
// The resulting object containing this data should have 6 properties. 
// See the example output at the bottom.

// // output
// { youngVotes: 1,
//   youth: 4,
//   midVotes: 3,
//   mids: 4,
//   oldVotes: 3,
//   olds: 4 
// }
let elementAge = [];
let element = [];
let elementValue;
let elementVoted = [];
let youth = [];
let youngVotes = [];
let mids = [];
let midVotes = [];
let olds = [];
let oldVotes = [];
for (let i = 0; i < voters.length; i++) {
    element.push(voters[i])
    elementAge.push(voters[i].age);
    elementValue = elementAge[i].valueOf();
    elementVoted.push(voters[i].voted)
    elVoted = elementVoted[i].valueOf();
    // console.log(elementVoted.valueOf())
    if(elementValue > 18 && elementValue <= 25){
        youth.push(elementValue)
        // console.log(youth);
        if(elementValue > 18 && elementValue <= 25 && elVoted === true){
            youngVotes.push(elementValue)
        }
    } else {
        // console.log(false)
    }
    if(elementValue > 26 && elementValue <= 35){
        mids.push(elementValue)
        // console.log(youth);
        if(elementValue > 26 && elementValue <= 35 && elVoted === true){
            midVotes.push(elementValue)
        }
    } else {
        // console.log(false)
    }
    if(elementValue > 36 && elementValue <= 55){
        olds.push(elementValue)
        // console.log(youth);
        if(elementValue > 36 && elementValue <= 55 && elVoted === true){
            oldVotes.push(elementValue)
        }
    } else {
        // console.log(false)
    }
}
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(element.reduce(reducer))

let result = {
    youth: youth.length,
    youngVotes: youngVotes.length,
    mids: mids.length,
    midVotes: midVotes.length,
    olds: olds.length,
    oldVotes: oldVotes.length,
}
