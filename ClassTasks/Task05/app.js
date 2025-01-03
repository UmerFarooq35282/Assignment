// Question ####

// We have array with sequence like 1 2 3 4 and so on ....................

// The problem is some of the number of this sequence is missing and we have to find the missing number.

// let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,15 , 16 , 18 , 20];

// for(let i = numberArr[0]; i <= numberArr[numberArr.length - 1]; i++){
//     if(numberArr.indexOf(i) === -1){
//         console.log(i);
//     }
// }

// Question ###

// We have to find graetest number from the array.

let arr = [1, 2, 3, 4,10,20,50, 5, 6, 7, 8, 9];

arr.sort((a, b) => a - b);
console.log(arr[arr.length - 1]);