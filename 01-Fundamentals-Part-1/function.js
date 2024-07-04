///////////////////////////////////////
// Functions
function logger() {
    console.log('My name is Jonas');
  }
  
  // calling / running / invoking function
  logger();
  logger();
  logger();
  
  function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
  }
  
  const appleJuice = fruitProcessor(5, 0);
  console.log(appleJuice);
  
  const appleOrangeJuice = fruitProcessor(2, 4);
  console.log(appleOrangeJuice);
  
  const num = Number('23');
  
  ///////////////////////////////////////
  // Function Declarations vs. Expressions
  
  // Function declaration
  function calcAge1(birthYeah) {
    return 2037 - birthYeah;
  }
  const age1 = calcAge1(1991);
  
  // Function expression
  const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
  };
  const age2 = calcAge2(1991);
  
  console.log(age1, age2);
  
  ///////////////////////////////////////
  // Arrow functions
  
  const calcAge3 = birthYeah => 2037 - birthYeah;
  const age3 = calcAge3(1991);
  console.log(age3);
  
  ///////////////////////////////////////
  // Functions Calling Other Functions
  function cutFruitPieces(fruit) {
    return fruit * 4;
  }
  
  function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
  
    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
  }
  console.log(fruitProcessor(2, 3));
  
  ///////////////////////////////////////
  // Reviewing Functions
  const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
  };
  
  const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;
  
    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
      return retirement;
    } else {
      console.log(`${firstName} has already retired 🎉`);
      return -1;
    }
  };
  
  console.log(yearsUntilRetirement(1991, 'Jonas'));
  console.log(yearsUntilRetirement(1950, 'Mike'));
  
  // Immediately Invoked Function Expressions (IIFE)
  const runOnce = function () {
    console.log('This will never run again');
  };
  runOnce();
  
  // IIFE
  (function () {
    console.log('This will never run again');
    const isPrivate = 23;
  })();
  
  // console.log(isPrivate);
  
  (() => console.log('This will ALSO never run again'))();
  
  {
    const isPrivate = 23;
    var notPrivate = 46;
  }
  // console.log(isPrivate);
  console.log(notPrivate);
  
  ///////////////////////////////////////
  // Closures
  const secureBooking = function () {
    let passengerCount = 0;
  
    return function () {
      passengerCount++;
      console.log(`${passengerCount} passengers`);
    };
  };
  
  const booker = secureBooking();
  
  booker();
  booker();
  booker();
  
  console.dir(booker);
  
  ///////////////////////////////////////
  // More Closure Examples
  // Example 1
  let f;
  
  const g = function () {
    const a = 23;
    f = function () {
      console.log(a * 2);
    };
  };
  
  const h = function () {
    const b = 777;
    f = function () {
      console.log(b * 2);
    };
  };
  
  g();
  f();
  console.dir(f);
  
  // Re-assigning f function
  h();
  f();
  console.dir(f);
  
  // Example 2
  const boardPassengers = function (n, wait) {
    const perGroup = n / 3;
  
    setTimeout(function () {
      console.log(`We are now boarding all ${n} passengers`);
      console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);
  
    console.log(`Will start boarding in ${wait} seconds`);
  };
  
  const perGroup = 1000;
  boardPassengers(180, 3);
  
  // You can use function.length syntax to find the number of parameters expected by a function. Let's take an example of sum function to calculate the sum of numbers,
  
  function sum(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
  }
  sum.length; // 4 is the number of parameters expected.
  