let arr = [7,4,5,6,8,9,];
let newArr = [];

for(let i=0; i<arr.length; i++){
    if(arr[i] < arr[i +1]){
        newArr.push(arr[i])
    }
}
arr.sort();
console.log(arr);

console.log(newArr);


// Question 
// Out for this 

for(let i=0; i<5; i++){
    for(let j=0; j<3; j++){
        console.log("hello");
    }
}

// Answer Inner loop execute 15 times