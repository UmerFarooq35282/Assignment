let number1 = +prompt("Please enter first number");
let number2 = +prompt("Please enter second number");
let number3 = +prompt("Please enter third number");

if(number1 > number2 && number1 > number3){
    console.log(number1 + " is the largest");
}
else if(number2 > number1 && number2 > number3){
    console.log(number2 + " is the largest");
}
 else if(number3 > number1 && number3 > number2){
    console.log(number3 + " is the largest");
}
 else{
    console.log("All numbers are equal");
}