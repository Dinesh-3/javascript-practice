/**
 * EVENT PROPAGATION
 *
 */
// BUBBLING OUT
document.querySelector('.bubbling-out .grand-parent').addEventListener(
  'click',
  event => {
    console.log('Grand Parent Component');
  },
  false
); // by default third param is false

document
  .querySelector('.bubbling-out .parent')
  .addEventListener('click', event => {
    console.log('Parent Component');
  });

document
  .querySelector('.bubbling-out .child')
  .addEventListener('click', event => {
    console.log('Child Component');
  });

// EVENT CAPTURING -> Parent to Child -> TRICKLING DOWN ( CAPTURING DOWN )

document.querySelector('.capturing .grand-parent').addEventListener(
  'click',
  event => {
    console.log('Grand Parent Component');
  },
  true
);

document.querySelector('.capturing .parent').addEventListener(
  'click',
  event => {
    console.log('Parent Component');
  },
  true
);

document.querySelector('.capturing .child').addEventListener(
  'click',
  event => {
    console.log('Child Component');
  },
  true
);

// BOTH CAPTURING AND BUBBLING
/*
  JS engine will execute capturing phase first then bubbling out phase
  OUTPUT FOR BELOW CODE:
  Grand Parent Component
  Parent Component
  Child Component

*/
document.querySelector('.capturing-bubbling .grand-parent').addEventListener(
  'click',
  event => {
    console.log('Grand Parent Component');
  },
  true
);

document.querySelector('.capturing-bubbling .parent').addEventListener(
  'click',
  event => {
    console.log('Parent Component');
  },
  false
);

document.querySelector('.capturing-bubbling .child').addEventListener(
  'click',
  event => {
    console.log('Child Component');
  },
  true
);

// STOP EVENT PROPAGATION
/*
  It will follow the propagation order
  OUTPUT FOR BELOW CODE:
    Child Component
    Parent Component
 If several listeners are attached to the same element for the same event type, 
 they are executed in order in which they have been added. 
 But, if any listener calls the event.stopImmediatePropagation() method, no remaining listeners will be executed.
*/
document.querySelector('.capturing-bubbling .grand-parent').addEventListener(
  'click',
  event => {
    console.log('Grand Parent Component');
  },
  false
);

document.querySelector('.capturing-bubbling .parent').addEventListener(
  'click',
  event => {
    console.log('Parent Component');
    event.stopPropagation();
  },
  false
);

document.querySelector('.capturing-bubbling .child').addEventListener(
  'click',
  event => {
    console.log('Child Component');
  },
  false
);

/**
 * EVENT DELEGATION
 * Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object. Event Delegation is achieved by using event bubbling. 

NOTE: 1. Event Delegation is not be achieved for some events (blur, scroll, ....) those events won't follow event propagation
      2. Won't work if we added event.stopPropagation() in child component
 */
