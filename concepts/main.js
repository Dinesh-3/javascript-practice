const searchInput = document.querySelector("#search");

const defaultElement = document.querySelector(".default h4");
const debounceElement = document.querySelector(".debounce h4");
const throttleElement = document.querySelector(".throttle h4");

searchInput.addEventListener("input", (e) => {
    const text = e.target.value;
    updateDefaultText(text);
    debounceUpdateText(text);
    throttleUpdateText(text);
});

const debounce = (method, delay = 1000) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            method(...args);
        }, delay);
    };
};

const throttle = (method, delay = 1000) => {
    let toggleExecute = true;
    return function (...args) {
        if (toggleExecute) {
            toggleExecute = false;
            method(...args);
            setTimeout(() => {
                toggleExecute = true;
            }, delay);
        }
    };
};

const updateDefaultText = (text) => {
    defaultElement.textContent = text;
};

const debounceUpdateText = debounce((text) => {
    debounceElement.textContent = text;
});

const throttleUpdateText = throttle((text) => {
    console.log("THTOLRE");
    throttleElement.textContent = text;
});

const button = document.querySelector(".button");
