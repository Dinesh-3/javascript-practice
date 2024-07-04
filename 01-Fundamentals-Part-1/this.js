'use strict';

const dinesh = {
  firstName: 'Dinesh',
  lastName: 'I',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const nestedArrowFunction = {
  firstName: 'Nested',
  lastName: 'Level 2',
  getFullName: () => {
    console.log('THIS LEVEL ONE ARROW: ', this);
    const level2Arrow = () => {
      console.log('arguments: ' + arguments);
      console.log('THIS LEVEL TWO ARROW: ', this);
    };

    level2Arrow(4, 5, 6, 2);
  },
};
nestedArrowFunction.getFullName();

const nestedFunction = {
  firstName: 'Nested',
  lastName: 'Level 2',
  getFullName: function () {
    console.log('LEVEL ONE THIS: ', this);
    function level2() {
      console.log('LEVEL TWO THIS: ', this);
    }
    level2(3, 4, 2, 6);
  },
};
nestedFunction.getFullName();
