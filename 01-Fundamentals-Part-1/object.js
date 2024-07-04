const DINESH = {
    firstName: "Dinesh",
    lastName: "Iyyandurai",
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

/*

    ALLOWED OPERATIONS: R
    NOT_ALLOWED OPERATIONS: C U D

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

Trying to make any changes mentioned above after an object being frozen will fail and will throw errors in strict mode.

Cannot add new properties.

Cannot remove existing properties.

Cannot change existing property values.

Cannot reconfigure any existing property. writable and configurable are set to false.

Cannot change its prototype.

Trying to make any changes mentioned above after an object being frozen will fail and will throw errors in strict mode

It will work only add the top level. we can able do CRUD in nested objects. If we need to prevent this we need to traverse object recursively and need to apply freeze on each nested objects

*/
// Object.freeze(DINESH);

// DINESH.firstName = "NO"; // Won't throw error but not going to set the value

// console.log({ DINESH });

// console.log(`Object.isFrozen(DINESH) ${Object.isFrozen(DINESH)}`); // is an Object method to check if an object is frozen by passing the object as the argument.

/*

    ALLOWED OPERATIONS: R U
    NOT_ALLOWED OPERATIONS: C D

    Object.seal()
    Object.seal() simply converts an object passed as the argument into a sealed state. An object called by this method can not have any new properties being added. But it can change existing property values as long as writable metadata is true.

Example:
    Object.seal(person)
    Cannot add new properties.

    Cannot remove existing properties.

  //  Cannot reconfigure any existing property.

    // Cannot convert a data property to accessor property or vice versa.
    We can able to update existing properties

    This also works in top level only

    By default objects are extensible in the sense that new properties can be added. Trying to make any changes mentioned above after an object being sealed will fail and will throw errors in strict mode.

    Object.isSealed() is an Object method to check if an object is sealed by passing the object as the argument.

Example:
Object.isSealed(person)
*/

/*

    ALLOWED OPERATIONS: R U D
    NOT_ALLOWED OPERATIONS: C

    Object.preventExtensions()
    Object.preventExtensions() simply converts an object passed as the argument into a non-extensible state. An object called by this method can not have any new properties being added. This method inherits functionality from its superset object.seal. Hence, it can change existing property values as long as writable metadata is true. In contrast to sealed objects, non-extensible objects can be deleted or reconfigured.

Example:

    Object.preventExtensions(person)
    Trying to add new properties after an object being non-extensible will fail and will throw errors in strict mode.

    Object.isExtensible() is an Object method to check if an object is extensible by passing the object as the argument.

    Example:

    Object.isExtensible(person)
    Note: Objects which stand as a property within an object or inner/child objects of an object can be modified unless there are separately sealed/frozen. In other words that object freeze/seal controls any changes to object properties shallowly, meaning that the direct property references cannot be changed. But properties nested inside direct object properties objects can be changed.

    Example:

    let person = {
        firstName: "James",  // firstName cannot be changed when frozen
        lastName: "Bond",    // lastName cannot be changed when frozen
        marks: {             // marks cannot be changed when frozen
            mathematics: 90,   // mathematics can be changed when frozen
            science: 89        // science can be changed when frozen
        }
    }

*/
// console.timeLog("test");
// console.log("test %c Hi Dinesh", "color:red");
// console.groupEnd("test");

// To check TWO objects are same or not
Object.is("hello", "hello"); // true
Object.is(window, window); // true
Object.is([], []); // false

/**
 * ACCESSORS
 * ECMAScript 5 introduced javascript object accessors or computed properties through getters and setters. Getters uses the get keyword whereas Setters uses the set keyword.
 */
const user = {
    firstName: "John",
    lastName: "Abraham",
    language: "en",

    get lang() {
        return this.language;
    },

    set lang(lang) {
        this.language = lang;
    }
};
console.log(user.lang); // getter access lang as en
user.lang = "fr";
console.log(user.lang); // setter used to set lang as fr

/**
 * 
    How do you define property on Object constructor
    The Object.defineProperty() static method is used to define a new property directly on an object, or modify an existing property on an object, and returns the object. Let's see an example to know how to define property,

    //    VM343:11 Uncaught TypeError: Cannot assign to read only property 'newProperty' of object '#<Object>'
    //    at <anonymous>:11:27

    const newObject = {};

    Object.defineProperty(newObject, "newProperty", {
        value: 100,
        writable: false,
    });

    console.log(newObject.newProperty); // 100

    newObject.newProperty = 200; // It throws an error in strict mode due to writable setting

    set and defineProperty difference
    Both have similar results until unless you use classes. If you use get the property will be defined on the prototype of the object whereas using Object.defineProperty() the property will be defined on the instance it is applied to.

    Getters and Setters advantages
    They provide simpler syntax
    They are used for defining computed properties, or accessors in JS.
    Useful to provide equivalence relation between properties and methods
    They can provide better data quality
    Useful for doing things behind the scenes with the encapsulated logic.
 */

var obj = { counter: 0 };

// Define getters
Object.defineProperty(obj, "increment", {
    get: function () {
        this.counter++;
    }
});
Object.defineProperty(obj, "decrement", {
    get: function () {
        this.counter--;
    }
});

// Define setters
Object.defineProperty(obj, "add", {
    set: function (value) {
        this.counter += value;
    }
});
Object.defineProperty(obj, "subtract", {
    set: function (value) {
        this.counter -= value;
    }
});

obj.add = 10;
obj.subtract = 5;
console.log(obj.increment); //6
console.log(obj.decrement); //5

// The simplest way to create an object is using an object literal
const circle = {
    radius: 1,
    draw: function () {}
};

// To create multiple objects with the same structure and behavior (methods), use a factory or a constructor.

// Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {}
    };
}

// Constructor function
function Circle(radius, requestedBy = "Dinesh") {
    this.radius = radius;
    this.requestedBy = requestedBy;
    this.draw = function () {};
    return this;
}

console.log("Circle typeof " + typeof new Circle(5));

// Every object has a "constructor" property which returns the function that was used to construct or create that object.
const x = {};
console.log("X Object is constructed by: ", x.constructor); // returns Object()

// In JavaScript, functions are objects. They have properties and methods.
console.log("Circle.name: " + Circle.name);
console.log("Circle.length: " + Circle.length);
console.log("Circle.constructor: " + Circle.constructor); // returns Function()
console.log("Circle call " + Circle.call(Circle, 1)); // to call the Circle function
console.log("Circle Apply " + Circle.apply(Circle, [1]));

// Value types are copied by their value, reference types are copied by their reference.
// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
// Reference types are: Object, Function and Array

// JavaScript objects are dynamic. You can add/remove properties:
circle.location = {};
circle["location"] = {};

delete circle.location;

// To enumerate the members in an object:
for (let key in circle) console.log(key, circle[key]);

console.log("Object.keys(circle); " + Object.keys(circle));
console.log("Object.values(circle); " + Object.values(circle));

// To see if an object has a given property
// if ("location" in circle)
// Abstraction means hiding the complexity/details and showing only the essentials.
// We can hide the details by using private members. Replace "this" with "let".

{
    // Public member
    this.radius = "radius";
    // Private member
    var defaultLocation = {};
}
console.log("#####################");
console.log(radius);
console.log(defaultLocation);
// To define a getter/setter, use Object.defineProperty():

// Object.defineProperty(this, "defaultLocation", {
//     get: function () {
//         return defaultLocation;
//     },
//     set: function (value) {
//         defaultLocation = value;
//     }
// });
