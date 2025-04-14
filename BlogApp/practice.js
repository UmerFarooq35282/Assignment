// let greeting = "Hello"

// function greetingFn(name){
//     console.log(greeting + " " + name)
// }

// greeting = "Hi"

// greetingFn('Umet')

// var num = 5;

// switch(num){
//     case "5":
//         console.log("five is string");
//         break;
//     case 5:
//         console.log('five is integer')
//         break;
//     default: 
//         console.log('No case Matced')
// }

// let date = new Date();

// // let date1 = '2025-02-24T05:22:50.766Z'
// // let date2 = '2025-02-24T06:22:50.766Z'
// // console.log(date1 > date2)

// // console.log(date.getMonth());

// date.setFullYear(2022)

// console.log(date);

// function multiply(){

// }

let arr = [1,2,3,4,5,6,7]

function makeChunk(arr,chunkSize){
//     let newArr = []
//     let newBigArr = []
//    for(let i =0; i <= arr.length; i++){
//         console.log('outer Loop');
//         for(let j=0; j < chunkSize; j++){
//             console.log('innerLoop');
//             newArr.push(arr.shift())
//         }
//         newBigArr.push(newArr)
//    }

//     console.log(newBigArr)

    let result = [];

    for(let i=0; i < arr.length; i += chunkSize){
        result.push(arr.slice(i,chunkSize+i))
    }
    console.log(result);
    
}
makeChunk(arr,2)


/** 
* Site Name 
* @type {string} 
*/
const siteName = "GeeksForGeeks"; 

/** 
* Number 
* @type {number} 
*/
const number = 1000; 

/** 
* Array 
* @type {Array<number>} 
*/
const myArray = [10, 20, 30];


