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
