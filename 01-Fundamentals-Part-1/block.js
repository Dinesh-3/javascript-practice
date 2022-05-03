/* BLOCK = Group of statement ( Compound statement )
        Wrapping or Grouping multiple statement
*/
var BLOCK = "MAIN_BLOCK"; // Shadowing will happen

{
    var BLOCK = "BLOCK_ONE"; // shadows the upper initialization, will update global value, same memory space

    var myName = "Dinesh"; // Global scope we can access outside

    console.log(`Hello ${myName}`);
    const BLOCK_ONE = "BLOCK_ONE";
    console.log({ BLOCK_ONE });
}
const BLOCK_TWO = "BLOCK_TWO";

{
    const BLOCK_TWO = "BLOCK_TWsO";
}
console.log({ BLOCK_TWO });

console.log({ myName });

// ILLEGAL SHADOWING

let APPLE = "APPLE_1"

{
    // var APPLE = "APPLE_1"; will
}

var a = 10;

function x() {
    var a = 12;
    console.log(a);
}
x();
console.log(a);
