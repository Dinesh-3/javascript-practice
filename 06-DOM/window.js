const goBackButton = document.querySelector('.go-back');
const goForwardButton = document.querySelector('.go-forward');

goBackButton.addEventListener('click', () => {
  // Note: We can also access history without window prefix.
  window.history.back();
  //   history.go(-1); // equivalent to history.back();
});

goForwardButton.addEventListener('click', () => {
  window.history.forward();
});

window.history.pushState(
  { firstName: 'Dinesh', lastName: 'Iyyandurai' },
  unused
);

// both have the effect of refreshing the page
window.history.go(0);
window.history.go();

/**
 * You can determine the number of pages in the history stack by looking at the value of the length property:
 */
let numberOfEntries = window.history.length;

/**
 * window.onpopstate
 */

window.onpopstate = function (event) {
  alert(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`
  );
};

history.pushState({ page: 1 }, 'title 1', '?page=1');
history.pushState({ page: 2 }, 'title 2', '?page=2');
history.replaceState({ page: 3 }, 'title 3', '?page=3');
history.back(); // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // alerts "location: http://example.com/example.html, state: null"
history.go(2); // alerts "location: http://example.com/example.html?page=3, state: {"page":3}"

function redirect() {
  window.location.href = 'newPage.html';
}

function handleMouseDown(event) {
  const isCapsLockOn = event.getModifierState('CapsLock');
  const isScrollLockOn = event.getModifierState('ScrollLock');
  const isNumLockOn = event.getModifierState('NumLock');

  console.log({ isCapsLockOn, isScrollLockOn, isNumLockOn });
}

/**
 * The window.navigator object contains information about the visitor's browser OS details. Some of the OS properties are available under platform property,

 */
console.log(navigator.platform);

/**
 * Void(0) is used to prevent the page from refreshing. 
 * This will be helpful to eliminate the unwanted side-effect, because it will return the undefined primitive value. 
 * It is commonly used for HTML documents that use href="JavaScript:Void(0);" within an <a> element. 
 * i.e, when you click a link, the browser loads a new page or refreshes the same page. 
 * But this behavior will be prevented using this expression. For example, the below link notify the message without reloading the page
  <a href="JavaScript:void(0);" onclick="alert('Well done!')">
    Click Me!
  </a>
 */

/**
 *  BOM
 * The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
 * It consists of the objects navigator, history, screen, location and document which are children of the window.
 *  The Browser Object Model is not standardized and can change based on different browsers.
 */
