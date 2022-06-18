// sort
let months = ["Aug", "Sep", "Jan", "June"];
months.sort(); // Modifies original array
console.log(months); //  ["Aug", "Jan", "June", "Sep"]

/*
    The compareFunction is used to define the sort order. 
    If omitted, the array elements are converted to strings, 
    then sorted according to each character's Unicode code point value. 
    Let's take an example to see the usage of compareFunction.
*/
let numbers = [1, 2, 5, 3, 4];
numbers.sort((a, b) => b - a);
console.log(numbers); // [5, 4, 3, 2, 1]

numbers.reverse(); // reverse an array
console.log(numbers); // [1, 2, 3, 4 ,5]

// MIN MAX
var marks = [50, 20, 70, 60, 45, 30];
function findMin(arr) {
  return Math.min.apply(null, arr);
}
function findMax(arr) {
  return Math.max.apply(null, arr);
}

console.log(findMin(marks));
console.log(findMax(marks));
