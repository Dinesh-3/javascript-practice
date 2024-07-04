///////////////////////////////////////
// Maps: Fundamentals
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

const addTwoNumbers = (a, b) => {
  return a + b;
};

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");
// .set("addTwoNumbers",  addTwoNumbers) // Won't work both function declaration and arrow function

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

// Maps: Iteration
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);
console.log(question);

// Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

/**
 * WEEK MAP
 * The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. In this case, keys must be objects and the values can be arbitrary values. The syntax is looking like as below,

  new WeakMap([iterable]);
  Let's see the below example to explain it's behavior,

  The main difference is that references to key objects in Map are strong while references to key objects in WeakMap are weak. i.e, A key object in WeakMap can be garbage collected if there is no other reference to it. Other differences are,

  Maps can store any key type Whereas WeakMaps can store only collections of key objects
  WeakMap does not have size property unlike Map
  WeakMap does not have methods such as clear, keys, values, entries, forEach.
  WeakMap is not iterable.

  set(key, value): Sets the value for the key in the WeakMap object. Returns the WeakMap object.
  delete(key): Removes any value associated to the key.
  has(key): Returns a Boolean asserting whether a value has been associated to the key in the WeakMap object or not.
  get(key): Returns the value associated to the key, or undefined if there is none. Let's see the functionality of all the above methods in an example,

 */
const weekMap = new WeakMap();
const user = {};
weekMap.set(user);
weekMap.has(user); // true
weekMap.delete(user); // removes user from the map
weekMap.has(user); // false, user has been removed

var weakMapObject = new WeakMap();
var firstObject = {};
var secondObject = {};
// set(key, value)
weakMapObject.set(firstObject, "John");
weakMapObject.set(secondObject, 100);
console.log(weakMapObject.has(firstObject)); //true
console.log(weakMapObject.get(firstObject)); // John
weakMapObject.delete(secondObject);
