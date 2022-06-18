/*
    INTL Object
The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. It provides access to several constructors and language sensitive functions.
*/

// language specific date time formatting
// can use the Intl.DateTimeFormat object which is a constructor for objects that enable language-sensitive date and time formatting. Let's see this behavior with an example,

var date = new Date(Date.UTC(2019, 07, 07, 3, 0, 0));
console.log(new Intl.DateTimeFormat("en-GB").format(date)); // 07/08/2019
console.log(new Intl.DateTimeFormat("en-AU").format(date)); // 07/08/2019
