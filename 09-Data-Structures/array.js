// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Simple Array Methods
let letters = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log({ letters });
console.log('letters.slice(2) ' + letters.slice(2));
console.log('letters.slice(2, 4) ' + letters.slice(2, 4));
console.log('letters.slice(-2) ' + letters.slice(-2));
console.log('letters.slice(-1) ' + letters.slice(-1));
console.log('letters.slice(1, -2) ' + letters.slice(1, -2));
console.log(`letters.slice() ${letters.slice()}`);
console.log(`[...letters] ${[...letters]}`);

// SPLICE
// console.log(arr.splice(2));
letters.splice(-1);
console.log(letters);
letters.splice(1, 2);
console.log(letters);

// REVERSE
letters = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const combinedLetters = letters.concat(arr2);
console.log(letters);
console.log([...letters, ...arr2]);

// JOIN
console.log(letters.join(' - '));

///////////////////////////////////////
// The new at Method
const numbers = [23, 11, 64];
console.log(letters[0]);
console.log(letters.at(0));

// getting last array element
console.log(letters[letters.length - 1]);
console.log(letters.slice(-1)[0]);
console.log(letters.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));

///////////////////////////////////////
// Looping Arrays: forEach

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
movements.forEach(function (mov, i, entireArray) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

///////////////////////////////////////
// forEach With Maps and Sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log({ currenciesUnique });

currenciesUnique.forEach(function (value, _, map) {
  console.log({ value, _, map });
});

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
