console.log("=== OPERATORS JAVASCRIPT ===");
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(`2 ** 3 ${2 ** 3}`);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let s = 10 + 5; // 15
s += 10; // x = x + 10 = 25
s *= 4; // x = x * 4 = 100
s++; // x = x + 1
s--;
s--;
console.log(s);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const year2037 = 2037;
const ageBab = now - 1991;
const ageAngel = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
s = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log({ x, y, s });

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

const lockerPrice = 6.73456;

const parsedInt = parseInt(lockerPrice);

const roundOf = (number) => {
    if (number == null || typeof number != Number) return number;

    const roundedByTwo = parseFloat(number).toFixed(2);

    return parseFloat(roundedByTwo);
};

console.log(`roundOf(lockerPrice) ${roundOf(lockerPrice)}`);

console.log({ lockerPrice, parsedInt });

/*
    UNARY OPERATOR
    The unary(+) operator is used to convert a variable to a number.If the variable cannot be converted, it will still become a number but with the value NaN. Let's see this behavior in an action.

*/
let x100 = "100";
let y100 = +x;
console.log(typeof x100, typeof y100); // string, number

let hello = "Hello";
let numberHello = +hello;
console.log(typeof hello, typeof numberHello, numberHello); // string, number, NaN
console.log("=== END ===");
