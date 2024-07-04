Function.prototype.mybind = function (...params1) {
    const obj = this;
    const args = params1.slice(0, 1);
    return function(...params2) {
        obj.apply(params1[0], )
    }
}