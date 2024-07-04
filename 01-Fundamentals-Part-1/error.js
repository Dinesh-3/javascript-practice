/**
    Error Name	Description
    EvalError	An error has occurred in the eval() function
    RangeError	An error has occurred with a number "out of range"
    ReferenceError	An error due to an illegal reference // undefinedVariable is not defined
    SyntaxError	An error due to a syntax error
    TypeError	An error due to a type error
    URIError	An error due to encodeURI()

    try: This statement is used to test a block of code for errors
    catch: This statement is used to handle the error
    throw: This statement is used to create custom errors.
    finally: This statement is used to execute code after try and catch regardless of the result.
 * A SyntaxError is thrown if you try to evaluate code with a syntax error.
 * For example, the below missing quote for the function parameter throws a syntax error
 */

try {
    eval("greeting('welcome)"); // Missing ' will produce an error
} catch (err) {
    console.log(err.name);
}

// TYPE ERROR
// Catching a TypeError
try {
    null.f();
} catch (e) {
    console.log(e instanceof TypeError); // true
    console.log(e.message); // "null has no properties"
    console.log(e.name); // "TypeError"
    console.log(e.fileName); // "Scratchpad/1"
    console.log(e.lineNumber); // 2
    console.log(e.columnNumber); // 2
    console.log(e.stack); // "@Scratchpad/2:2:3\n"
}
// Copy to Clipboard
// Creating a TypeError
try {
    throw new TypeError("Hello", "someFile.js", 10);
} catch (e) {
    console.log(e instanceof TypeError); // true
    console.log(e.message); // "Hello"
    console.log(e.name); // "TypeError"
    console.log(e.fileName); // "someFile.js"
    console.log(e.lineNumber); // 10
    console.log(e.columnNumber); // 0
    console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
