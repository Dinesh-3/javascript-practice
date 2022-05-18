function sum(x) {
  return function (y) {
    if (y) return sum(x + y);
    return x;
  };
}

const outerLevel = () => {
  console.log(x, y);
  return 'dfdf';
};

const total = sum(3)(2)();

console.log('SUM: ' + total);
