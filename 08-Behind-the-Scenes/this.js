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

const nestedFunction = {
  firstName: 'Nested',
  lastName: 'Level 2',
  getFullName: function () {
    console.log('THIS LEVEL ONE FUNCTION: ', this);
    const self = this;
    function level2() {
      const LEVEL = 2;
      console.log('arguments: ' + arguments);
      console.log(`THIS LEVEL ${LEVEL} FUNCTION: `, self);
    }

    level2(3, 4, 2, 6);
  },
};

nestedArrowFunction.getFullName();

nestedFunction.getFullName();
