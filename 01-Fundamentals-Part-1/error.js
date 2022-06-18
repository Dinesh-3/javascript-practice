/**
 * Error Name	Description
    EvalError	An error has occurred in the eval() function
    RangeError	An error has occurred with a number "out of range"
    ReferenceError	An error due to an illegal reference
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
