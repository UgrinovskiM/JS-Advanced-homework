// Reverse
let x = [1,2,3,4,5];
let y = x.reverse();
console.log("1. Reversed:", y);

// Combinations

let z = "Dog";
function combinator(z) {
    newArr = new Array();
    for(i=0;i<z.length;i++) {
        for(j=i+1;j<z.length+1;j++) {
            newArr.push(z.slice(i, j));
        }
    }
    return newArr;
 }
 console.log(combinator(z))