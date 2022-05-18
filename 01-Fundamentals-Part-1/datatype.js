console.log("=== DATATYPE START ===");

console.log(`typeof null ${typeof null}`); // object

console.log(`typeof undefined ${typeof undefined}`); // undefined

// JavaScript consider these to be relatively equal since they both represent an empty value.
console.log(`${null == undefined}`); // true

console.log(`${null === undefined}`); // false ( different datatype null = object, undefined = undefined )

console.log("=== DATATYPE END ===");

// console.log(fruit); // fruit is undeclared so it will throw Reference error fruit is not defined
