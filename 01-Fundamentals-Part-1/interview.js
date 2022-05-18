/*

setTimeout with Closure

*/

function printNumberInSequence() {
    // Won't work as expected because in var i it will point to the reference so it will update the value in same reference
    // for (var i = 1; i <= 5; i++) {
    //     setTimeout(() => {
    //         console.log(i);
    //     }, i * 1000);
    // }

    // To fix use let or closure
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }

    for (var i = 1; i <= 5; i++) {
        function callInSequence(i) {
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        }
        callInSequence(i);
    }
}

// printNumberInSequence();

function closureWithSetTimeout(mainMethodParams = "main method param") {
    function innerFunction(innerFunctionParam) {
        console.log({ mainMethodParams, innerFunctionParam, VAR_TYPE, LET_TYPE });
    }

    setTimeout(() => {
        console.log("SET TIME OUT: ", { mainMethodParams, VAR_TYPE, LET_TYPE });
    }, 1000);

    let LET_TYPE = "LET_TYPE"; // if we move line one after inner function call will get ReferenceError: Cannot access 'LET_TYPE' before initialization
    innerFunction("inner function calling from upper method");
    var VAR_TYPE = "VAR_TYPE";
    return innerFunction;
}

const innerFunction = closureWithSetTimeout();

innerFunction("calling inner function from main block");
