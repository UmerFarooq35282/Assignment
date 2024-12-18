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
document.write(`<h1>“Rules for naming JS variables”</h1>`);
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

document.write(`<h1>Sum of ${num1} and ${num2} is ${sum}</h1>`);

// Question 02
// Answer
document.write(`<h1>Subtract of ${num1} and ${num2} is ${subtract}</h1>`);
document.write(`<h1>multiplication of ${num1} and ${num2} is ${multiply}</h1>`);
document.write(`<h1>Division of ${num1} and ${num2} is ${divide}</h1>`);

// Question 03
// Answer

// (A)
let a;
// (B)
document.write(`<h1>“Value after variable declaration is:${a} </h1>`);

// (C)
a = 5;
// (D)
document.write(`<h1>“Initial value: ${a} </h1>`);
// (E)
a++;
// (F)
document.write(`<h1>“Value after incrementing: ${a} </h1>`);
// (G)
a = a +7;
// (H)
document.write(`<h1>“Value after adding is: ${a} </h1>`);
// (I)
a--;
// (J)
document.write(`<h1>“Value after decrementing: ${a} </h1>`);
// (K)
document.write(`<h1>“The remainder is: ${a % 3} </h1>`);

