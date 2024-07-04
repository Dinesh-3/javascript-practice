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

// window.onstorage = function (e) {
//     console.log("The " + e.key + " key has been changed from " + e.oldValue + " to " + e.newValue + ".");
// };

// TO BROWSER WEB STORAGE SUPPORT
if (typeof Storage !== "undefined") {
    console.log("Code for localStorage/sessionStorage.");
} else {
    console.log("Sorry! No Web Storage support..");
}

// check browser support for web workers
if (typeof Worker !== "undefined") {
    // code for Web worker support.
} else {
    // Sorry! No Web Worker support..
}

function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done");
        }, time);
    });
}

async function sleep(time) {
    await setTimeout(() => {
        return "Done";
    }, time);
}

(async function () {
    console.log("log1");
    await sleep(2000);
    console.log("log2");
})();

function test() {
    let count = 0;
    ``;
    function increment() {
        count++;
    }
    let message = `count is ${count}`;

    function log() {
        console.log(message, count);
    }

    return [increment, log];
}

const [increment, log] = test();

increment();
increment();
increment();
log();

function currying(fn, arr = []) {
    return function (val) {
        if (val) {
            arr.push(val);
            return currying(fn, arr);
        } else {
            return fn.call(this, ...arr);
        }
    };
}

function multiply(a, b, c, d) {
    return a * b * c * d;
}

let mulExecute = currying(multiply);
console.log(mulExecute(1)(2)(3)(4)()); // 6

function LetterChanges(str) {
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var newAlpha = "bcdEfghIjklmnOpqrstUvwxyzA";
    var answer = "";

    for (i = 0; i < str.length; i++) {
        if (alpha.indexOf(str[i]) !== -1) {
            answer += newAlpha.charAt(alpha.indexOf(str[i]));
        } else {
            answer += str[i];
        }
    }
    return answer;
}
Number.MA;
// keep this function call here
// LetterChanges(readline());

// Javascript program to find smallest and
// second smallest elements

function print2Smallest(arr, arr_size) {
    let i, first, second;

    /* There should be atleast two elements */
    if (arr_size < 2) {
        document.write(" Invalid Input ");
        return;
    }

    first = Number.MAX_VALUE;
    second = Number.MAX_VALUE;
    for (i = 0; i < arr_size; i++) {
        /* If current element is smaller than first
        then update both first and second */
        if (arr[i] < first) {
            second = first;
            first = arr[i];
        } else if (arr[i] < second && arr[i] != first) second = arr[i];

        /* If arr[i] is in between first and second
        then update second */
    }
    if (second == Number.MAX_VALUE) console.log("There is no second smallest element\n");
    else console.log("The smallest element is " + first + " and second " + "Smallest element is " + second + "\n");
}

let arr = [12, 13, 1, 10, 34, 1];
let n = arr.length;
print2Smallest(arr, n);
