function functionStatement() {
  console.log('FUNCTION STATEMENT');
}

var functionExpression = function xyz(params) {
  console.log('FUNCTION EXPRESSION');
  console.log(xyz);
};
functionExpression();
console.log(xyz); // Will throw error

const arrowFunction = params => {
  console.log('ARROW FUNCTION');
};

/*
    ANONYMOUS FUNCTION
    Function without it's name
*/

// Not Possible
// function() {

// }

// Possible
functionExpression(function () {
  console.log('Anonymous Function');
});

/*
    First Class Function OR First Class Citizens
    Function treated as variables
    Ability to Pass function as an argument and returning function as a value 
*/
functionExpression(function () {
  console.log('Anonymous Function as an argument');
});

/*
    CALLBACK FUNCTION
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
*/

function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);

/*
Higher Order Function

Function which takes another function as an arguments or its returns a function
*/

const radiuses = [3, 5, 2, 1];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (array, logic) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(logic(array[i]));
  }
  return output;
};
console.log(calculate(radiuses, area));
console.log(calculate(radiuses, circumference));
console.log(calculate(radiuses, diameter));

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};
console.log(radiuses.calculate(area));
