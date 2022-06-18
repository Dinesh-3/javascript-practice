/*

window
WEB API'S

TIMER
1. setTimeout
2. setInterval

1. DOM APIs
    document
2. fetch
3. localStorage
4. console
5. location

*/

/*

https://medium.com/@sadia.islam.badhon/callback-queue-vs-microtask-queue-9dc6a790330e

EVENT LOOP -> Will push callback function from Callback Queue ( Task Queue ) to Callback stack

Callback Queue:
    Starvation will happen if queue items is waiting for longer period of time 

Microtask Queue -> Similar to callback queue
    Promise, Mutation Observer ( Watches DOM changes ) will go into Microtask Queue
    Microtask Queue high priority queue. 
    Event Loop will give chance to Callback Queue only if Microtask Queue is empty

FETCH API:

    Fetch operation will go into micro task queue once it's receives data from the server

*/

/*

JAVASCRIPT RUNTIME ENVIRONMENT

JS ENGINE
API - To connect external resources
Callback Queue
Microtask Queue

JS ENGINE EXECUTION STEPS

1. PARSING
    Code will be broken down to tokens. 
    Syntax parser -> Will convert JS code into AST ( Abstract  Syntax Tree ) https://astexplorer.net/.
2. COMPILATION
    JIT (Just In Time ) Compilation 
    AOT -> Ahead of Time Compiler
    Inlining
    Copy Elision
    Inline caching
3. EXECUTION
    Memory Heap, Call stack, Garbage collector( Will clear memory whenever not used using Mark & Sweep algorithm)

Google V8
IGNITION -> Interpreter
Turbo fan -> Optimized Compiler
Orinoco, Oil pam -> Garbage Collector
*/

/*

SET TIMEOUT Trust issues

*/

setTimeout(function () {
    console.log("Executes after main block executed");
}, 0);

setTimeout(function () {
    console.log("Not guarantee will execute in exact 5000ms time. It will execute after main thread executes");
}, 5000);

// for (let i = 0; i < 100_000; i++) {
//     console.log(i);
// }

let startDate = new Date().getTime();

let endDate = startDate;

while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

/*
    ( BUNDLING JS FILE )
        OBFUSCATION 

    Obfuscation is the deliberate act of creating obfuscated javascript code(i.e, source or machine code) that is difficult for humans to understand. 
    It is something similar to encryption, but a machine can understand the code and execute it. 
    Let's see the below function before Obfuscation,
    
    APPLICATION:
    1. The Code size will be reduced. So data transfers between server and client will be fast.
    2. It hides the business logic from outside world and protects the code from others
    3. Reverse engineering is highly difficult
    4. The download time will be reduced

    MINIFICATION
    1. Minification is the process of removing all unnecessary characters(empty spaces are removed) 
     and variables will be renamed without changing it's functionality. 
    2. It is also a type of obfuscation .

    APPLICATION:
    1. Decreases loading times of a web page
    2. Saves bandwidth usages

    function greeting() {
      console.log("Hello, welcome to JS world");
    }
*/

// And after the code Obfuscation, it would be appeared as below,
eval(
    (function (p, a, c, k, e, d) {
        e = function (c) {
            return c;
        };
        if (!"".replace(/^/, String)) {
            while (c--) {
                d[c] = k[c] || c;
            }
            k = [
                function (e) {
                    return d[e];
                }
            ];
            e = function () {
                return "\\w+";
            };
            c = 1;
        }
        while (c--) {
            if (k[c]) {
                p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
            }
        }
        return p;
    })("2 1(){0.3('4, 7 6 5 8')}", 9, 9, "console|greeting|function|log|Hello|JS|to|welcome|world".split("|"), 0, {})
);
