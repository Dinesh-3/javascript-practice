const persons = [
    {
        id: 1,
        firstName: "Dinesh",
        lastName: "I",
        email: "dinesh@gmail.com"
    },
    {
        id: 2,
        firstName: "Nishanth",
        lastName: "N",
        email: "nishanth@gmail.com"
    },
    {
        id: 3,
        firstName: "Pavithran",
        lastName: "S",
        email: "pavithran@gmail.com"
    },
    {
        id: 4,
        firstName: "Rahul",
        lastName: "Krishnan",
        email: "rahulkrishnan@gmail.com"
    },
    {
        id: 5,
        firstName: "Dinesh",
        lastName: "I",
        email: "dinesh@gmail.com"
    }
];

persons.push({
    id: persons.length + 1,
    firstName: "Karthi",
    lastName: "Keyan",
    email: "karthikeyan@gmail.com"
});

console.log({ persons });

const ids = persons.map((person) => {
    return {
        name: person.firstName + " " + person.lastName
    };
});
console.log(ids);

const nishanth = persons.filter((person) => person.id > 3);
console.log(nishanth);

const filter = persons.filter((item, index, all) => {
    // console.log({item, index, all});
    return true;
});

const total = persons.reduce((a, b, index, all) => {
    // console.log({a,b, index, all});
    return a + b.id;
}, 0);

const max = persons
    .map((person) => person.id)
    .reduce((max, current, index, all) => (max < current ? current : max), Number.MIN_VALUE);

const min = persons
    .map((person) => person.id)
    .reduce((min, current, index, all) => (min > current ? current : min), Number.MAX_VALUE);

console.log({ total, max, min });

// To get uniques in Array of primitive values
// const uniques = persons.filter((value, index, self) => self.indexOf(value) === index )
// console.log({uniques});

const uniques = [...new Map(persons.map((item) => [item["id"], item])).values()];
console.log({ uniques });

// Spreading map

const fruits = {
    mango: {
        name: "Mango",
        rating: 10
    },
    orange: {
        name: "Orange",
        rating: 7
    },
    banana: {
        name: "Banana",
        rating: 10
    },
    grapes: {
        name: "Grapes",
        rating: 6
    },
    pomegranate: {
        name: "Pomegranate",
        rating: 3
    },
    avocado: {
        name: "Avocado",
        rating: 1
    },
    coconut: {
        name: "Coconut",
        rating: 10
    },
    watermelon: {
        name: "Watermelon",
        rating: 7
    },
    dragonfruit: {
        name: "Dragonfruit",
        rating: 2
    },
    strawberry: {
        name: "Strawberry",
        rating: 8
    },
    blueberry: {
        name: "Blueberry",
        rating: 3
    },
    blackberry: {
        name: "Blackberry",
        rating: 7
    },
    cherry: {
        name: "Cherry",
        rating: 8
    },
    jackfruit: {
        name: "Jackfruit",
        rating: 5
    },
    kiwifruit: {
        name: "Kiwifruit",
        rating: 7
    },
    guava: {
        name: "Guava",
        rating: 6
    }
};

const arrayOfFruits = Object.values(fruits);
console.log({ arrayOfFruits });

const fruitsRating = arrayOfFruits.reduce((ratingObject, current) => {
    const { rating, name } = current;
    if (current.rating in ratingObject) ratingObject[rating].push(name);
    else ratingObject[rating] = [name];
    return ratingObject;
}, {});

console.log({ fruitsRating });

function binary(x = 0) {
    return x.toString(2);
}

const binaries = persons.map((person) => person.id).map(binary);
console.log({ binaries });
