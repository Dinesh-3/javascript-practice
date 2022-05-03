/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Simple Array Methods
let letters = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(letters.slice(2));
console.log(letters.slice(2, 4));
console.log(letters.slice(-2));
console.log(letters.slice(-1));
console.log(letters.slice(1, -2));
console.log(letters.slice());
console.log([...letters]);

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
movements.forEach(function (mov, i, arr) {
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
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
