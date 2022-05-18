let firstName: string = "Dinesh";
// firstName = 2; // Type 'number' is not assignable to type 'String'.ts(2322)
let id: number = 3;
let isPublished: boolean = true;
let x: any = "anyTypeAllowed";

let ids: number[] = [3, 8, 5, 6, 0];
let anyValue: any[] = [1, true, "dinesh", { name: "jack" }];

//Tuple
const person: [number, string, boolean] = [4, "dinesh", true];
// Tuple Array
const employee: [number, string][] = [
    [1, "DInesh"],
    [2, "nesh"]
];

// union
let productId: string | number = "3534";
productId = 45345;

// ENUM

enum DIRECTION {
    UP = 1, // UP = "UP"
    DOWN,
    LEFT,
    RIGHT
}

console.log({ DIRECTION });

type Point = number | string;

type User = {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
};

const dinesh: User = {
    id: 1,
    firstName: "Dinesh",
    lastName: "Iyyandurai",
    dateOfBirth: new Date()
};

const bioData: {
    height: number;
    weight: number;
    blood: string;
} = {
    height: 122,
    weight: 55,
    blood: "B+"
};

// Type Assertion

let customerId = 34;

let personId = <number>customerId;
personId = customerId as number;

function addTwoNumber(x: number = 0, y: number): number {
    return x + y;
}

function print(content: string | number): void {
    console.log(content);

    // return "LES"; // Type 'string' is not assignable to type 'void'.ts(2322)
}

interface IPerson {
    readonly id: number; // read only
    fullName: string;
    height?: number; // optional
    weight?: number;
}

interface Premium {
    netPremium: number;
    grossPremium: number;
    getPremium(): string;
}

const john: IPerson = {
    id: 7,
    fullName: "John Mathew",
    height: 125,
    weight: 54
};

interface NumberFunction {
    (x: number, y: number): number;
}

const multiply: NumberFunction = (x, y) => x * y;
const subtract: NumberFunction = (x: number, y: number): number => x * y;

// Classes

class Car implements Premium {
    public id: number;
    brand: string;
    make: string;
    model: string;
    protected price: number;

    private static originalPrice = 38485858;

    netPremium: number;
    grossPremium: number;

    constructor(id: number, brand: string, make: string, model: string, price: number) {
        this.id = id;
        this.brand = brand;
        this.make = make;
        this.model = model;
        this.price = price;
    }

    public getPremium(): string {
        return `GP: ${this.grossPremium} | NP: ${this.netPremium}`;
    }

    public getCarName(): string {
        return `${this.id} - ${this.brand} ${this.make} ${this.model}`;
    }

    private getRandomNumber(): number {
        return Math.random() * 100;
    }
}

class Person implements IPerson {
    id: number;
    fullName: string;
    height?: number;
    weight?: number;

    constructor(id, fullName, height, weight) {
        this.id = id;
        this.fullName = fullName;
        this.height = height;
        this.weight = weight;
    }
}

const honda = new Car(34, "HONDA", "Creta", "X", 2000000);

console.log("honda.getCarName(): ", honda.getCarName());

// console.log(honda.getRandomNumber()); //Property 'getRandomNumber' is private and only accessible within class 'Car'.ts(2341)

class Employee extends Person {
    employeeCode: string;
    email: string;
    constructor(id, fullName, height, weight, employeeCode, email) {
        super(id, fullName, height, weight);
        this.employeeCode = employeeCode;
        this.email = email;
    }
}

// GENERICS

function copyArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

const numberArray = copyArray<number>([3, 9, 4, 5, 5, 6]);
// numberArray.push("fd"); // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)

const stringArray = copyArray<string>(["wert3", "ewrtwe", "sfdg", "wert", "sdgsdfg", "wertwert"]);
