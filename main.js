/* EXECUTION CONTEXT:

Global Execution context and Global Memory Object

Phase:
1. Memory Allocation
    variables - undefined
    function - object
2. Code Execution

FUNCTION:
    For every function call brand new execution context will be created. with Memory and Code section.
    After returning a value , function execution context will be deleted.

Javascript manages execution context using call stack, Call stack maintains the order of execution of execution contexts

Scope Chain === Lexical Environment -> Parent Child Scope Relation 

Local Memory + Lexical Environment of Parent

Temporal Dead Zone = let and cost ( Without initializing above if we access then it will throw can't access 'variable_name' before  initialization )
*/
