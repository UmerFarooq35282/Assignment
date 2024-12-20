// =======================> Chapter 6-9 <===============================

// Question 01
// Answer
let num = 10;

document.write(`<p>
    Result: <br />
    The Value of num : ${num} <br />
    ------------------------<br />
    The Value of ++num : ${++num} <br />
    Now the Value of num : ${num} <br /><br /><br />
    The Value of num++ : ${num++} <br />
    Now the Value of num : ${num} <br /><br /><br />
    The Value of --num : ${--num} <br />
    Now the Value of num : ${num} <br /><br /><br />
    The Value of num-- : ${num--} <br />
    Now the Value of num : ${num} <br />
    </p>`);


// Question 02
// Answer

// let tableNum = +prompt("Enter Table Number");

// PRINT TABLE
if(tableNum == 0) {
    tableNum = 5;
}
document.write(`<p> ${tableNum} X 1 = ${tableNum * 1}</p>`);
document.write(`<p> ${tableNum} X 2 = ${tableNum * 2}</p>`);
document.write(`<p> ${tableNum} X 3 = ${tableNum * 3}</p>`);
document.write(`<p> ${tableNum} X 4 = ${tableNum * 4}</p>`);
document.write(`<p> ${tableNum} X 5 = ${tableNum * 5}</p>`);
document.write(`<p> ${tableNum} X 6 = ${tableNum * 6}</p>`);
document.write(`<p> ${tableNum} X 7 = ${tableNum * 7}</p>`);
document.write(`<p> ${tableNum} X 8 = ${tableNum * 8}</p>`);
document.write(`<p> ${tableNum} X 9 = ${tableNum * 9}</p>`);
document.write(`<p> ${tableNum} X 10 = ${tableNum * 10}</p>`);


// Question 06
// Answer

// let subjectOneName = prompt("Please enter First Subject Name");
// let subjectTwoName = prompt("Please enter Second Subject Name");
// let subjectThreeName = prompt("Please enter Third Subject Name");
// let eachSubjectMarks = 100;

// let subjectOneMarks = +prompt("Please enter Subject One marks");
// let subjectTwoMarks = +prompt("Please enter Subject Two marks");
// let subjectThreeMarks = +prompt("Please enter Subject Three marks");

// // Each subject percentage

// let subjectOnePercentage = (subjectOneMarks / eachSubjectMarks) * 100;
// let subjectTwoPercentage = (subjectTwoMarks / eachSubjectMarks) * 100;
// let subjectThreePercentage = (subjectThreeMarks / eachSubjectMarks) * 100;


// let totalMarks = eachSubjectMarks * 3;

// let totalObtainedMarks = subjectOneMarks + subjectTwoMarks + subjectThreeMarks;

// let percentage = (totalObtainedMarks / totalMarks) * 100;

// // make table for this observation in one template string
// document.write(`
//     <table border='1'>
//         <thead>
//             <tr>
//                 <th>Subject Name</th>
//                 <th>Subject Marks</th>
//                 <th>Percentage</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>${subjectOneName}</td>
//                 <td>${subjectOneMarks}</td>
//                 <td>${subjectOnePercentage.toFixed(2)}%</td>
//             </tr>
//             <tr>
//                 <td>${subjectTwoName}</td>
//                 <td>${subjectTwoMarks}</td>
//                 <td>${subjectTwoPercentage.toFixed(2)}%</td>
//             </tr>
//             <tr>
//                 <td>${subjectThreeName}</td>
//                 <td>${subjectThreeMarks}</td>
//                 <td>${subjectThreePercentage.toFixed(2)}%</td>
//             </tr>
//         </tbody>
//     </table>
//     <br />
//     <p>Total Marks: ${totalObtainedMarks}</p>
//     <p>Percentage: ${percentage.toFixed(2)}%</p>
//     `);         