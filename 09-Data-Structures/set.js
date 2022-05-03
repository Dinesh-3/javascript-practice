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
