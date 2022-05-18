// import scopeJS from "./scope.js";

console.log("=== SCRIPT JS FILE ===");

// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

// lastName = "Schmedtmann"; // Uncaught TypeError: Assignment to constant variable. | Because in imported scope file it is declared

console.log("Accessing variable from one file to another file");

console.log(
    `<script src="./operators.js" type="module"></script> Accessing lastName variable from operators: ${lastName} `
);

console.log(`<script src="./scope.js"></script> Accessing BLOCK Constant variable from scope.js:: ${BLOCK}`);

console.log("=== END ===");

// because of this below issue above code are not going to execute
// const WRONG; // Won't stop the execution of other scripts present in the script tag or file
