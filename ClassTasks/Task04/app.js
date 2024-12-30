let str = "umer";

console.log(`${str[0].toUpperCase()}${str.slice(1)}`);

let arr1 = ["karachi" , "lahore" , "islamabaad"]

let last = arr1.pop();
let first = arr1.shift();

arr1.unshift(last);
arr1.push(first);
console.log(arr1);