console.log("=== DATATYPE START ===");

/**
 * The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values. The type of null value is object. You can empty the variable by setting the value to null.
 */
var userNull = null;
console.log(typeof userNull); //object
console.log(`typeof null ${typeof null}`); // object

console.log(`typeof undefined ${typeof undefined}`); // undefined

// JavaScript consider these to be relatively equal since they both represent an empty value.
console.log(`${null == undefined}`); // true

console.log(`${null === undefined}`); // false ( different datatype null = object, undefined = undefined )

console.log("=== DATATYPE END ===");

// console.log(fruit); // fruit is undeclared so it will throw Reference error fruit is not defined
typeof "John Abraham"; // Returns "string"
typeof (1 + 2); // Returns "number"

/**
 * UNDEFINED
 */
var userNull; // Value is undefined, type is undefined
console.log(typeof userNull); //undefined

userNull = undefined; // We can also set undefined as a value

/**
 *              Null	                                                                            Undefined
    It is an assignment value which indicates that variable points to no object.	It is not an assignment value where a variable has been declared but has not yet been assigned a value.
    Type of null is object	                                                        Type of undefined is undefined
    The null value is a primitive value that represents the null, empty         	The undefined value is a primitive value used when a variable has not been assigned a value.
    , or non-existent reference.
    Indicates the absence of a value for a variable	                                Indicates absence of variable itself
    Converted to zero (0) while performing primitive operations	                    Converted to NaN while performing primitive operations
 */

const nullPlusFive = null + 5; // 5
const undefinedPlusFive = undefined + 5; // NaN

console.log({ nullPlusFive, undefinedPlusFive });

const nullPlusString = null + "dinesh"; // nulldinesh
const undefinedPlusString = undefined + "dinesh"; // undefineddinesh
console.log({ nullPlusString, undefinedPlusString });

/**
 * The eval() function evaluates JavaScript code represented as a string. The string can be a JavaScript expression, variable, statement, or sequence of statements.
 */

console.log('eval("6 + ( 2 * 2 )") ' + eval("6 + ( 2 * 2 )"));

/**
 * The isNaN() function is used to determine whether a value is an illegal number (Not-a-Number) or not. i.e, This function returns true if the value equates to NaN. Otherwise it returns false.
 */
isNaN("Hello"); //true
isNaN("100"); //false

Math.sqrt(-1);
parseInt("Hello");

/**
 * The isFinite() function is used to determine whether a number is a finite, legal number.
 * It returns false if the value is +infinity, -infinity, or NaN (Not-a-Number), otherwise it returns true.
 */
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(100); // true
