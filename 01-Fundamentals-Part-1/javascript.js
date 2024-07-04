/*

    Everything in JavaScript happens inside an ExecutionContext

    Components:
        1. Memory Component - Stores variables and references ( variables and functions as key value pairs )
            Also known as variable environment
        2. Code Component - Also known as Thread of Execution 

    Javascript is an synchronous Single Thread Language 

    Execution Phases
    1. Memory Allocation Phase
    2. Code Execution Phase

    1. For function invokation new execution context is created

    Callstack maintains order of execution of Execution Contexts

    CallStack also known as
        1. Execution Context stack
        2. Program stack
        3. Control stack
        4. Runtime stack
        5. Machine stack


    Hoisting 
     1. Ability to access variables and functions before the initialization. Happens because of the execution context 


     Temporal Dead Zone

     Syntax Error -> SyntaxError: Missing initializer in const declaration
     ReferenceError: dinesh is not defined
     ReferenceError: Cannot access 'fs' before initialization
     TypeError: Assignment to constant variable.

     Block -> Compound Statement

*/