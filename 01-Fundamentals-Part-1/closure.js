/*
CLOSURE - Function along with it's lexical scope bundle together form a closure . bind together with its lexical environment
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
 In other words, a closure gives you access to an outer function's scope from an inner function. 
 In JavaScript, closures are created every time a function is created, at function creation time.
*/
function x() {
    var x = 10;
    function y() {
        console.log(x);
    }
    x = 50;
    return y;
}

const y = x(); // function along with it's scope was return

// Function still maintain the lexical scope
y(); // Will print "X"

function scheduleTimeout() {
    console.log("BEFORE TIMEOUT");
    const months = 12;
    // setTimeout(
    function execute() {
        console.log("IN SET TIMEOUT", { months, days });
    }
    // , 2000);
    const days = 365;
    execute();
    console.log("AFTER TIMEOUT");
}

scheduleTimeout();

function setTimeoutInsideLoop() {
    // for (var i = 1; i <= 5; i++) {
    //     setTimeout(function () {
    //         console.log("SET TIMEOUT LOOP VAR", { index: i }); // Will point to reference of i
    //     }, i * 1000);
    // }

    // for (var i = 1; i <= 5; i++) {
    //     function schedule(i) {
    //         setTimeout(function () {
    //             console.log("SET TIMEOUT LOOP VAR", { index: i }); // Will point to reference of i
    //         }, i * 1000);
    //     }

    //     schedule(i);
    // }

    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log("SET TIMEOUT LOOP LET", { index: i }); // Will point to reference of i
        }, i * 1000);
    }
}

setTimeoutInsideLoop();
