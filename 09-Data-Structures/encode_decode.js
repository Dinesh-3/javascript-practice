const URL = "https://github.com/sudheerj/javascript-interview-questions";

let encoded_uri = encodeURI(URL);
let decoded_uri = decodeURI(encoded_uri);

console.log({ encoded_uri, decoded_uri });

console.log(encodeURIComponent(URL)); // / ? : @ & = + $ #
