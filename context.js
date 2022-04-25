var x = 1;

a();
b();
console.log(x);

function a() {
    var x = 2;
    console.log(x);
}

function b() {
    var x = 3;
    console.log(x);
}

console.log(this === window);

console.log(window.x);

const a_const = "a_const";
let a_let = "a_let";
var a_var = "a_var";

console.log(window.a_const);
console.log(window.a_let);
console.log(window.a_var);

// const init; // missing initializer in const
const apple = "APPLE";

apple = "BANANA"; // Assignment to const

if (true) console.log("IF TRUE LOG");
