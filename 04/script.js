// Homework 01 Clean up array
const dataToClean = [1, NaN, 2, [3, NaN,'', 5] ];
const dataToClean1 = [3, NaN,'', 5];

// function cleanUp(array){
//     for (let i = 0;i < array.length;i++){
//         if (array[i] === ''){
//             array.splice(i,1);
//         }
//     }
//     console.log(dataToClean1)
// }
// cleanUp(dataToClean1)
function bouncer(arr) {
    var array = arr.filter(function(val){
        return val;
    });
    return array;
}
console.log(bouncer(dataToClean1))











// 02 Coins


// 03 Descendants