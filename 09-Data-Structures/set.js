const uniqueFruits = new Set([
  "apple",
  "orange",
  "apple",
  "banana",
  "jackfruit",
  "tragonfruit",
]);

uniqueFruits.add("strawberry");
uniqueFruits.delete("jackfruit");

console.log(uniqueFruits.size);
console.log(uniqueFruits.has("apple"));
console.log(uniqueFruits.values());
// uniqueFruits.clear() // clears the set

// console.log(uniqueFruits[0]); // Won't Work
// uniqueFruits.size = 3; // Won't work doesn't throw error

uniqueFruits.forEach(fruit => fruit.toUpperCase());

console.log("AFTER REMOVE ", uniqueFruits);

// Incorrect Only accepts first argument
const taskStatus = new Set("STARTED", "INPROGRESS", "PENDING", "COMPLETED");

console.log({ taskStatus });

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("jonasschmedtmann").size);

/**
 * WeakSet
 * The main difference is that references to objects in Set are strong while references to objects in WeakSet are weak. i.e, An object in WeakSet can be garbage collected if there is no other reference to it. Other differences are,
  Sets can store any value Whereas WeakSets can store only collections of objects
  WeakSet does not have size property unlike Set
  WeakSet does not have methods such as clear, keys, values, entries, forEach.
  WeakSet is not iterable.
 */

const weeklyNames = new WeakSet();

weeklyNames.add({ name: "Dinesh" });
weeklyNames.add({ name: "New" });
weeklyNames.has({ name: "Dinesh" });
weeklyNames.delete({ name: "Dinesh" }); // NOTE: Need to pass reference not new object
