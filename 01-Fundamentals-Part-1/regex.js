/**
   * Modifiers can be used to perform case-insensitive and global searches. Let's list down some of the modifiers,
    Modifier	Description
    i	Perform case-insensitive matching
    g	Perform a global match rather than stops at first match
    m	Perform multiline matching


    Character	    Description	            Example	Try it
    []	        A set of characters	"[a-m]"	
    \	        Signals a special sequence (can also be used to escape special characters)	"\d"	
    .	        Any character (except newline character)	"he..o"	
    ^	        Starts with	"^hello"	
    $	        Ends with	"planet$"	
    *	        Zero or more occurrences	"he.*o"	
    +	        One or more occurrences	"he.+o"	
    ?	        Zero or one occurrences	"he.?o"	
    {}	        Exactly the specified number of occurrences	"he.{2}o"	
    |	        Either or	"falls|stays"	

    \A	        Returns a match if the specified characters are at the beginning of the string	"\AThe"	
    \b	        Returns a match where the specified characters are at the beginning or at the end of a word
                 (the "r" in the beginning is making sure that the string is being treated as a "raw string")	r"\bain"
                 r"ain\b"	
    \B	        Returns a match where the specified characters are present, but NOT at the beginning (or at the end) of a word
                 (the "r" in the beginning is making sure that the string is being treated as a "raw string")	r"\Bain"
                 r"ain\B"	
    \d	        Returns a match where the string contains digits (numbers from 0-9)	"\d"	
    \D	        Returns a match where the string DOES NOT contain digits	"\D"	
    \s	        Returns a match where the string contains a white space character	"\s"	
    \S	        Returns a match where the string DOES NOT contain a white space character	"\S"	
    \w	        Returns a match where the string contains any word characters (characters from a to Z, digits from 0-9, and the underscore _ character)	"\w"	
    \W	        Returns a match where the string DOES NOT contain any word characters	"\W"	
    \Z	        Returns a match if the specified characters are at the end of the string	"Spain\Z"	


   */

console.log("---- REGEX ----");

const text = "Learn JS one by one";
const pattern = /one/g; // new RegExp("/one/g");

const result = text.match(pattern); // ['one', 'one']

const myName = "Dinesh I";

myName.replace(/I/, "Iyyandurai"); // Dinesh Iyyandurai

// EXEC method returns result array
/I/.exec("Dinesh I"); // ['I', index: 7, input: 'Dinesh I', groups: undefined]

// TITLE CASE CONVERTER

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
toTitleCase("good morning john"); // Good Morning John
