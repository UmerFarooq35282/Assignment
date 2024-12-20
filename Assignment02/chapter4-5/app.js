// ============================== Chapter 04 ========================= >
// Question 01
// Answer

let name = "Umer Farooq"; age = 24; gender = "male";

// Question 02
// Answer

// Declaring Five Legal variable names

let school = "SMIT";
let college = "FG BOYS COLLEGE KARACHI CANNT";
let isInterPassed = true;
let isMatricPassed = true;
let totalMarks = 880;

// Declaring Five illegal variales name

// ======================> let 123 = "Umer Farooq"; 
// ======================> let @#%$ = 24; 
// ======================> let my-gender = "male"; 
// ======================> let true = false; 
// ======================> let 10thmarks = 880;

// Question 03
// Answer
// (A)
document.write(`<p>“Rules for naming JS variables”</p>`);
// (B)
document.write(`<p>Variable names can only contain numbers , $ , and _ . For example $my_1stVariable</p>`);
// (C)
document.write(`<p>Variables must begin with a letters, $ or
_. For example $name, _name or name</p>`);
// (D)
document.write(`<p>Variable names are case sensitive</p>`);
// (E)
document.write(`<p>Variable names should not be JS keywords</p>`);

// ============================== Chapter 05 ========================= >

// Question 01
// Answer

let num1 = 20; let num2 = 10;

let sum = num1 + num2;
let subtract = num1 - num2;
let multiply = num1 * num2;
let divide = num1 / num2;

document.write(`<p>Sum of ${num1} and ${num2} is ${sum}</p>`);

// Question 02
// Answer
document.write(`<p>Subtract of ${num1} and ${num2} is ${subtract}</p>`);
document.write(`<p>multiplication of ${num1} and ${num2} is ${multiply}</p>`);
document.write(`<p>Division of ${num1} and ${num2} is ${divide}</p>`);

// Question 03
// Answer

// (A)
let a;
// (B)
document.write(`<p>“Value after variable declaration is:${a} </p>`);

// (C)
a = 5;
// (D)
document.write(`<p>“Initial value: ${a} </p>`);
// (E)
a++;
// (F)
document.write(`<p>“Value after incrementing: ${a} </p>`);
// (G)
a = a +7;
// (H)
document.write(`<p>“Value after adding is: ${a} </p>`);
// (I)
a--;
// (J)
document.write(`<p>“Value after decrementing: ${a} </p>`);
// (K)
document.write(`<p>“The remainder is: ${a % 3} </p>`);


// Question 04
// Answer

let costOfMovieTicket = 600;
let totalPurchase = 5;

document.write(`<p>The total cost of buy ${totalPurchase} tickets to a movie is ${costOfMovieTicket * totalPurchase} PKR </p>`);

// Question 05
// Answer
let table = 5;
// PRINT TABLE
document.write(`<p> ${table} X 1 = ${table * 1}</p>`);
document.write(`<p> ${table} X 2 = ${table * 2}</p>`);
document.write(`<p> ${table} X 3 = ${table * 3}</p>`);
document.write(`<p> ${table} X 4 = ${table * 4}</p>`);
document.write(`<p> ${table} X 5 = ${table * 5}</p>`);
document.write(`<p> ${table} X 6 = ${table * 6}</p>`);
document.write(`<p> ${table} X 7 = ${table * 7}</p>`);
document.write(`<p> ${table} X 8 = ${table * 8}</p>`);
document.write(`<p> ${table} X 9 = ${table * 9}</p>`);
document.write(`<p> ${table} X 10 = ${table * 10}</p>`);


// Question 06
// Answer

// temprature Convertor
// celsius Convert
let celsius = 25;

let fahrenheit = celsius * 9 / 5 + 32;

document.write(`<p>Temperature in Fahrenheit from Celsius ${celsius} ��C is ${fahrenheit} ��F</p>`);

// fahrenheit Convert
let fahrenheit1 = 70;

let celsius1 = (fahrenheit1 - 32) * 5 / 9;

document.write(`<p>Temperature in Celsius from Fahrenheit ${fahrenheit1} is ${celsius1} ��C</p>`);

// Question 07
// Anwer

let itemOnePrice = 650;
let itemTwoPrice = 150;
let itemOneQuantity = 3;
let itemTwoQuantity = 2;
let shippinhCharges = 100;

let totalPrice = (itemOnePrice * itemOneQuantity) + (itemTwoPrice * itemTwoQuantity) + shippinhCharges;

document.write(`<p>
    Price of itemOne: ${itemOnePrice} <br/>
    Quantity of itemOne: ${itemOneQuantity} <br/>
    Price of itemTwo: ${itemTwoPrice} <br/>
    Quantity of itemTwo: ${itemTwoQuantity} <br/>
    Shipping charges: ${shippinhCharges} PKR <br/><br/>
    Total cost of your order is ${totalPrice} PKR</p>`);

// Question 08
// Answer

// Marksheet of Two Subjects with percentage

let englishMarks = 85;
let mathsMarks = 95;

let totalMarks1 = englishMarks + mathsMarks;

let averageMarks = totalMarks1 / 2;

let percentage = (averageMarks / 100) * 100;

document.write(`<p>
    English Marks: ${englishMarks} <br/>
    Maths Marks: ${mathsMarks} <br/><br/>
    Total Marks: ${totalMarks1} <br/>
    Percentage : ${percentage} <br/>
    `);

// Question 09
// Answer

// Calculate Exchange Rate

let usDollerWeHave = 10;
let saudiRiyalWeHave = 25;

let dollarExchangeRate = 300;
let riyalExchangeRate = 75;

let totalDollars = usDollerWeHave * dollarExchangeRate;

let totalRiyals = saudiRiyalWeHave * riyalExchangeRate;

let totalExchangeRate = totalDollars + totalRiyals;

document.write(`<p>
    Total USD: ${usDollerWeHave} <br/>
    Total SAR: ${saudiRiyalWeHave} <br/>
    Dollar Exchange Rate: ${dollarExchangeRate} PKR/USD <br/>
    Riyal Exchange Rate: ${riyalExchangeRate} PKR/SAR <br/><br/>
    Total Exchange Rate: ${totalExchangeRate} PKR <br/>
    </p>
`);

// Question 10
// Answer

// Calculate Circumference and Area of Circle


let radius = 5;
let circumference = 2 * Math.PI * radius;

document.write(`<p>
    Radius: ${radius} <br/>
    Circumference: ${circumference} units <br/>
    </p>
`);


let area = Math.PI * Math.pow(radius, 2);

document.write(`<p>
    Radius: ${radius} <br/>
    Area: ${area} square units <br/>
    </p>
`);