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
