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
    console.log("Executes after main block exectued");
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
