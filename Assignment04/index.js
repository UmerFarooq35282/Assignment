// Cahpter 14 - Arrays

let names = [];

// use JS literal notation for names

names.push("Alice");
names.push("Bob");
names.push("Charlie");

// use JS object notation for names

names[names.length] = "David";
names[names.length] = "Eve";
names[names.length] = "Frank";

let stringArray = ["Umer" ,"Rehan","Abbas"];

let numbersArray = [1, 2, 3, 4, 5];

let booleanArray = [true, false, true, false];

let mixedArray = ["Alice", 1, true, {name: "Bob"}, [7, 8, 9]];

let qualificationInPakistan = ["SSC" ,"HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil" , "PhD"];

let studentsName = ['Umer' , "Farhan" , 'Nadeem'];
let studentsScore = [450 , 378 , 430];

let totalNumbers = 500;

console.log(`Score of ${studentsName[0]} is ${studentsScore[0]}. Percentage: ${(studentsScore[0]/totalNumbers)*100}%`);
console.log(`Score of ${studentsName[1]} is ${studentsScore[1]}. Percentage: ${(studentsScore[1]/totalNumbers)*100}%`);
console.log(`Score of ${studentsName[2]} is ${studentsScore[2]}. Percentage: ${(studentsScore[2]/totalNumbers)*100}%`);