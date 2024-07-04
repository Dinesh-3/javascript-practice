while (1);
/* 
    SCOPE TYPE:
        GLOBAL SCOPE
        FUNCTION SCOPE
        BLOCK SCOPE

BLOCK = Group of statement ( Compound statement )
        Wrapping or Grouping multiple statement
SCOPE CHAIN: JavaScript resolves a variable is by looking at it in its current scope, if it cannot find the variable, 
    it goes up to the outer scope, which is called the scope chain.

Script -> type Script we can access variables from one script tag to other
Module -> type="module" We can't access variables from one script tag to other

*/

console.log("=== SCOPE JS FILE ===");

var BLOCK = "MAIN_BLOCK"; // Shadowing will happen

{
    var BLOCK = "NESTED_BLOCK_ONE"; // shadows the upper initialization, will update above variable value also because var global scope, same memory space

    var myName = "Dinesh"; // Global scope we can access outside

    console.log(`Hello ${myName}`);
    const BLOCK_ONE = "BLOCK_ONE";
    console.log({ BLOCK_ONE });

    var VAR_DECLARED_INSIDE_BLOCK = "VAR_DECLARED_INSIDE_BLOCK";
}

console.log({ BLOCK });
console.log({ VAR_DECLARED_INSIDE_BLOCK });
// console.log({ BLOCK_ONE }); // ReferenceError: BLOCK_ONE is not defined

const BLOCK_TWO = "BLOCK_TWO";

{
    const BLOCK_TWO = "BLOCK_TWsO";
}
console.log({ BLOCK_TWO });

console.log({ myName });

// ILLEGAL SHADOWING It Will throw error

let APPLE = "APPLE_1";

{
    // var APPLE = "APPLE_1"; throws // Cannot redeclare block-scoped variable 'APPLE'.ts(2451)
}

var BANANA = "BANANA";

{
    let BANANA = "BLOCK BANANA"; // won't throw error
}

var A = 10;

console.log("var A value outside the function : " + A); // 10

// Will be stored in global scope
function declareVarInsideFunction() {
    var A = 12;
    console.log("var A value inside the function: " + A); // 12

    var VAR_DECLARED_INSIDE_FUNCTION = "VAR_DECLARED_INSIDE_FUNCTION";
    const CONST_DECLARED_INSIDE_FUNCTION = "CONST_DECLARED_INSIDE_FUNCTION";
    let LET_DECLARED_INSIDE_FUNCTION = "LET_DECLARED_INSIDE_FUNCTION";
}

declareVarInsideFunction();

console.log("var A value After Executed the function: " + A); // 10

const CONST_FRUIT = "CONST_FRUIT"; // Stored in Script Scope
let LET_FRUIT = "LET_FRUIT"; // Stored in Script

var VAR_FRUIT = "VAR_FRUIT";

/* 
    Global variable leaks 

    Under the hood, the JavaScript engine first looks up the counter variable in the local scope of the getCounter() function. 
    Because there is no var, let, or const keyword, the counter variable is not available in the local scope. 
    It hasn’t been created. Then, the JavaScript engine follows the scope chain and looks up the counter variable in the global scope. 
    The global scope also doesn’t have the counter variable, so the JavaScript engine creates the counter variable in the global scope.

    To fix this "weird" behavior, you use the 'use strict' at the top of the script or at the top of the function:

*/

// ("use strict"); // valid

function assignValueWithoutDeclaration() {
    // ("use strict"); // valid
    // value = 10; // if strict mode enabled will throws Uncaught ReferenceError: value is not defined.
    // return value;
}

console.log(`assignValueWithoutDeclaration(): ${assignValueWithoutDeclaration()}`);

// Below Code is valid in chrome context
// console.log({
//     VAR_DECLARED_INSIDE_SCRIPT_TAG_TOP_HTML_TREE,
//     LET_DECLARED_INSIDE_SCRIPT_TAG_TOP_HTML_TREE
// });

console.log("=== SCOPE END ===");

// Above code won't execute because of below code
// export default CONST_FRUIT; // Uncaught ReferenceError: LET_FRUIT is not defined

GLOBAL_VARIABLE = "Dinesh Iyyandurai"; // var is missing, it becomes global variable

("use strict");

// Scoping in Practice

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating NEW variable with same name as outer scope's variable
            const firstName = "Steven";

            // Reasssigning outer scope's variable
            output = "NEW OUTPUT!";

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = "Jonas";
calcAge(1991);
// console.log(age);
// printAge();

///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

// console.log(x === window.x); // 1
// console.log(y === window.y); // undefined
// console.log(z === window.z); // undefined

///////////////////////////////////////
// The this Keyword in Practice
console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// };
calcAge(1991);

const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    console.log(this);
};
calcAgeArrow(1980);

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
    firstName: "Jonas",
    year: 1991,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year);

        // Solution 1
        // const self = this; // self or that
        // const isMillenial = function () {
        //   console.log(self);
        //   console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // Solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const functionArguments = function (a, b) {
    console.log(arguments);
    return a + b;
};
functionArguments(2, 5);
functionArguments(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addArrow(2, 5, 8);

///////////////////////////////////////
// Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const meTwo = {
    name: "Jonas",
    age: 30
};
const friend = me;
friend.age = 27;
console.log("Friend:", friend);
console.log("Me", me);

///////////////////////////////////////
// Primitives vs. Objects in Practice
// Primitive Type: Number. Boolean, null, undefined, Symbol, BigInt, String
// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage: ", marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ["Alice", "Bob"]
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage:", jessica2);
console.log("After marriage: ", jessicaCopy);

