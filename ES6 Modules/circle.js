const _radius = new WeakMap();

// Classes can only extend a single class.ts(1174). Multiple inheritance is not allowed in javascript
export class Circle extends WeakMap {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log("Circle with radius " + _radius.get(this));
    }
}
