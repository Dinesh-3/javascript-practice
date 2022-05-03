////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`);
}

////////////////////////////////////
// Type Conversion and Coercion

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}

////////////////////////////////////
// Equality Operators: == vs. ===
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    // 22 === 23 -> FALSE
    console.log("Cool! 23 is an amzaing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else if (favourite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");

////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}
