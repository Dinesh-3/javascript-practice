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

/**
 * You can use window.location.href expression to get the current url path and you can use the same expression for updating the URL too. You can also use document.URL for read-only purposes but this solution has issues in FF.
    console.log("location.href", window.location.href); // Returns full URL
    The below Location object properties can be used to access URL components of the page,

  href - The entire URL
  protocol - The protocol of the URL
  host - The hostname and port of the URL
  hostname - The hostname of the URL
  port - The port number in the URL
  pathname - The path name of the URL
  search - The query portion of the URL
  hash - The anchor portion of the URL ( http://www.example.com:80/test.htm#part1 ) -> #part1 -> HTML ID pointing in the URL

  You can use URLSearchParams to get query string values in javascript. Let's see an example to get the client code value from URL query string,

  const urlParams = new URLSearchParams(window.location.search);
  const clientCode = urlParams.get("clientCode");
 */

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

/**
 * What is tree shaking
  Tree shaking is a form of dead code elimination. It means that unused modules will not be included in the bundle during the build process
  Application: Tree Shaking can significantly reduce the code size in any application. i.e, The less code we send over the wire the more performant the application will be 
 */

/**
   * The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect. For example, in the below function a debugger statement has been inserted. 
   * So execution is paused at the debugger statement just like a breakpoint in the script source.
  function getProfile() {
    // code goes here
    debugger;
    // code goes here
  }
   */

/**
 * Can I use reserved words as identifiers
    No, you cannot use the reserved words as variables, labels, object or function names. Let's see one simple example.
    var else = "hello"; // Uncaught SyntaxError: Unexpected token else

 */

const onetriyem = {
  else: {},
};

/**
 * USER AGENT
 */

navigator.userAgent; // 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36'

/**
 * get the image width and height using JS
 *  var img = new Image();
  img.onload = function () {
    console.log(this.width + "x" + this.height);
  };
  img.src = "http://www.google.com/intl/en_ALL/images/logo.gif";
 */

/**
   * WINDOW SIZE
   * var width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    var height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
*/

/**
 * var language =
    (navigator.languages && navigator.languages[0]) || // Chrome / Firefox
    navigator.language || // All browsers
    navigator.userLanguage; // IE <= 10

  console.log(language);
 */

/**
 * PRINT WEBSITE
 * The window object provided a print() method which is used to print the contents of the current window. It opens a Print dialog box which lets you choose between various printing options. Let's see the usage of print method in an example,

  <input type="button" value="Print" onclick="window.print()" />
  Note: In most browsers, it will block while the print dialog is open.
 */
