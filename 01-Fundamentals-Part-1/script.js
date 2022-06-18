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

/**
 * It is recommended to avoid creating new objects using new Object(). Instead you can initialize values based on it's type to create the objects.

    Assign {} instead of new Object()
    Assign "" instead of new String()
    Assign 0 instead of new Number()
    Assign false instead of new Boolean()
    Assign [] instead of new Array()
    Assign /()/ instead of new RegExp()
    Assign function (){} instead of new Function()
    You can define them as an example,

    var v1 = {};
    var v2 = "";
    var v3 = 0;
    var v4 = false;
    var v5 = [];
    var v6 = /()/;
    var v7 = function () {};
 */

/**
     * The Proxy object is used to define custom behavior for fundamental operations such as property lookup, assignment, enumeration, function invocation, etc. The syntax would be as follows,

    var p = new Proxy(target, handler);
    Let's take an example of proxy object,

    var handler = {
    get: function (obj, prop) {
        return prop in obj ? obj[prop] : 100;
    },
    };

    var p = new Proxy({}, handler);
    p.a = 10;
    p.b = null;

    console.log(p.a, p.b); // 10, null
    console.log("c" in p, p.c); // false, 100
*/
