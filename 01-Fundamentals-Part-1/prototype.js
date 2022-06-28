"use strict";

///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this! it will create this function for each instance
    // this.calcAge = function () {
    //   console.log(2037 - this.birthYear);
    // };
};

const jonas = new Person("Jonas", 1991);
console.log({ jonas });

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(jonas instanceof Person);

// STATIC METHOD
Person.hey = function () {
    console.log("Hey there 👋");
    console.log(this);
};
Person.hey();

///////////////////////////////////////
// Prototypes
// console.log("Person.prototype: ", Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log("jonas.__proto__: ", jonas.__proto__);
console.log("Person.prototype: ", Person.prototype);

console.log("jonas.__proto__ === Person.prototype: ", jonas.__proto__ === Person.prototype);

console.log("Person.prototype.isPrototypeOf(jonas) " + Person.prototype.isPrototypeOf(jonas));
console.log("Person.prototype.isPrototypeOf(matilda) " + Person.prototype.isPrototypeOf(matilda));
console.log("Person.prototype.isPrototypeOf(Person) " + Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("firstName")); // Determines whether an object has a property with the specified name.
console.log(jonas.hasOwnProperty("species"));

///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir("Person.prototype.constructor: ", Person.prototype.constructor);

console.log("jonas.constructor: ", jonas.constructor); // The initial value of Object.prototype.constructor is the standard built-in Object constructor.

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
};

console.log(arr.unique());

// const h1 = document.querySelector("h1");
console.dir((x) => x + 1);

// OOPS PROTOTYPE EXAMPLE

const Animal = {
    defaultName: "ANIMAL",
    place: "FOREST",
    introduce() {
        console.log(`Hello I am ${this.defaultName} from ${this.place}`);
    }
};

const Dog = {
    defaultName: "Puppy"
};

Dog.__proto__ = Animal;

Animal.introduce();

Dog.introduce();

// BY Code With Mosh
// Every object (except the root object) has a prototype (parent).
// To get the prototype of an object:
Object.getPrototypeOf(obj);

// In Chrome, you can inspect "__proto__" property. But you should
// not use that in the code.

// To get the attributes of a property:
Object.getOwnPropertyDescriptor(obj, "propertyName");

// To set the attributes for a property:
Object.defineProperty(obj, "propertyName", {
    configurable: false, // cannot be deleted
    writable: false,
    enumerable: false
});

// Constructors have a "prototype" property. It returns the object
// that will be used as the prototype for objects created by the constructor.
Object.prototype === Object.getPrototypeOf({});
Array.prototype === Object.getPrototypeOf([]);

// All objects created with the same constructor will have the same prototype.
// A single instance of this prototype will be stored in the memory.
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true

// Any changes to the prototype will be immediately visible to all objects
// referencing this prototype.

// When dealing with large number of objects, it's better to put their
// methods on their prototype. This way, a single instance of the methods
// will be in the memory.
Circle.prototype.draw = function () {};

// To get the own/instance properties:
Object.keys(obj);

// To get all the properties (own + prototype):
for (let key in obj) {
}
