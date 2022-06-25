const successPromiseOneSecond = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Success Promise 1000 executed ...");
        resolve("Success");
    }, 1500);
});

const successPromiseTwoSecond = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Success Promise 200 executed...");
        resolve("Success");
    }, 200);
});

const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Error Promise executed...");

        let name;

        console.log(name.dinesh);

        resolve("Error Promise");
    }, 1000);
});

const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Rejected Promise executed...");

        reject("Rejected Promise");
    }, 500);
});

// const promiseAll = Promise.all([successPromiseOneSecond, successPromiseTwoSecond, errorPromise, rejectedPromise]); // Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
// promiseAll
//     .then((result) => console.log("Promise All ", { result }))
//     .catch((error) => console.log("Promise All ", { error }));

// const promiseRace = Promise.race([successPromiseOneSecond, successPromiseTwoSecond, errorPromise, rejectedPromise]); // Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.
// promiseRace
//     .then((result) => console.log("Promise Race ", { result }))
//     .catch((error) => console.log("Promise Race ", { error }));

// const promiseAny = Promise.any([successPromiseOneSecond, successPromiseTwoSecond, errorPromise, rejectedPromise]); // Return result if any one got succeed
// promiseAny
//     .then((result) => console.log("Promise Any ", { result }))
//     .catch((error) => console.log("Promise Any ", { error }));

const promiseAllSettled = Promise.allSettled([
    successPromiseOneSecond,
    successPromiseTwoSecond,
    errorPromise,
    rejectedPromise
]); // Creates a Promise that is resolved with an array of results when all of the provided Promises resolve or reject.

promiseAllSettled
    .then((result) => console.log("Promise All Settled ", { result }))
    .catch((error) => console.log("Promise All Settled ", { error }));
