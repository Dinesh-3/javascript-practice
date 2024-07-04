// Looping Objects: Object Keys, Values, and Entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: "Jonas", email: "hello@jonas.io" }];
// const users = [];

console.log(users[0]?.name ?? "User array empty");

if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");

// The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);

// The label statement allows us to name loops and blocks in JavaScript. We can then use these labels to refer back to the code later. For example, the below code with labels avoids printing the numbers when they are same,

var i, j;

loop1: for (i = 0; i < 3; i++) {
  loop2: for (j = 0; j < 3; j++) {
    if (i === j) {
      continue loop1;
    }
    console.log("i = " + i + ", j = " + j);
  }
}

// Output is:
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"

/*
    TYPE OF LOOPS
    Entry Controlled loops: In this kind of loop type, the test condition is tested before entering the loop body. For example, For Loop and While Loop comes under this category.
    Exit Controlled Loops: In this kind of loop type, the test condition is tested or evaluated at the end of the loop body. i.e, the loop body will execute at least once irrespective of test condition true or false. For example, do-while loop comes under this category.
*/

/*
  ITERABLES
  Synchronous iteration was introduced in ES6 and it works with below set of components,

  Iterable: It is an object which can be iterated over via a method whose key is Symbol.iterator. 
  Iterator: It is an object returned by invoking [Symbol.iterator]() on an iterable. 
  This iterator object wraps each iterated element in an object and returns it via next() method one by one. 
  IteratorResult: It is an object returned by next() method. 
  The object contains two properties; the value property contains an iterated element and 
  the done property determines whether the element is the last element or not.
*/

const iterable = ["one", "two", "three"];
const iterator = iterable[Symbol.iterator]();
console.log(iterator.next()); // { value: 'one', done: false }
console.log(iterator.next()); // { value: 'two', done: false }
console.log(iterator.next()); // { value: 'three', done: false }
console.log(iterator.next()); // { value: 'undefined, done: true }

/*
empty statement for initializing array with zeros
  The empty statement is a semicolon (;) indicating that no statement will be executed, 
  even if JavaScript syntax requires one. 
  Since there is no action with an empty statement you might think that it's usage is quite less, 
  but the empty statement is occasionally useful when you want to create a loop that has an empty body. 
  For example, you can initialize an array with zero values as below,
*/
// Initialize an array a
const num = Array.from({ length: 7 }, () => 1);
for (let i = 0; i < num.length; num[i++] = 0);

// Initializing multiple variables using ,
for (const a = 0, b = 10; a <= 10; a++, b--); // Uncaught TypeError: Assignment to constant variable.
