const button = document.querySelector(".button");

/*

Not Working fix it

*/

button.addEventListener("click", throttle(sayHello, 3000));

function throttle(method, interval) {
    let toggleExecute = true;
    return function () {
        if (toggleExecute) {
            toggleExecute = false;
            method();
            setTimeout(() => {
                toggleExecute = true;
                console.log("Enter");
            }, interval);
        }
    };
}

function sayHello() {
    console.log("Hello");
}
