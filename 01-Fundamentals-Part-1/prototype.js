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
