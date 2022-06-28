///////////////////////////////////////
// Creating Dates

// Create a date

const now = new Date();
console.log(now);

console.log(new Date("Aug 02 2020 18:05:41"));
console.log(new Date("December 24, 2015"));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const futureDate = new Date(2037, 10, 19, 15, 23);
console.log(futureDate);
console.log(futureDate.getFullYear());
console.log(futureDate.getMonth());
console.log(futureDate.getDate());
console.log(futureDate.getDay());
console.log(futureDate.getHours());
console.log(futureDate.getMinutes());
console.log(futureDate.getSeconds());
console.log(futureDate.toISOString());
console.log(futureDate.getTime());

console.log(new Date(2142256980000));

console.log(Date.now());

futureDate.setFullYear(2040);
console.log(futureDate);

///////////////////////////////////////
// Operations With Dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(+futureDate);

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);

///////////////////////////////////////
// Internationalizing Numbers (Intl)
const num = 3884764.23;

const options = {
    style: "currency",
    unit: "celsius",
    currency: "EUR"
    // useGrouping: false,
};

console.log("US:      ", new Intl.NumberFormat("en-US", options).format(num));
console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num));
console.log("Syria:   ", new Intl.NumberFormat("ar-SY", options).format(num));
console.log(navigator.language, new Intl.NumberFormat(navigator.language, options).format(num));

///////////////////////////////////////
// Timers

// setTimeout
const ingredients = ["olives", "spinach"];
const pizzaTimer = setTimeout(
    (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
    3000,
    ...ingredients
);
console.log("Waiting...");

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

// setInterval
setInterval(function () {
    const now = new Date();
    console.log(now);
}, 1000);
