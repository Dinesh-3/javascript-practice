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
	},
];

persons.push({
	id: persons.length + 1,
	firstName: "Karthi",
	lastName: "Keyan",
  email: "karthikeyan@gmail.com"
});

console.log({persons});

const ids = persons.map(person => {
  return {
		name: person.firstName + " " + person.lastName,
	};
})
console.log(ids);

const nishanth = persons.filter(person => person.id > 3);
console.log(nishanth);

const filter = persons.filter((item, index, all) => {
  // console.log({item, index, all});
  return true;
})

const total = persons.reduce((a, b, index, all) => {
  // console.log({a,b, index, all});
  return a + b.id;
}, 0)
console.log(total);

// To get uniques in Array of primitive values
// const uniques = persons.filter((value, index, self) => self.indexOf(value) === index )
// console.log({uniques});

const uniques = [...new Map(persons.map(item => [item["id"], item])).values()]
console.log({uniques});


// Spreading map

const fruits = {
  mango: {
    name: "Mango",
    rating: 5.0
  },
  orange: {
    name: "Orange",
    rating: 3.0
  },
  banana: {
    name: "Banana",
    rating: 4.0
  },
  strawberry: {
    name: "Straw Berry",
    rating: 5.0
  },
}

const arrayOfFruits = Object.values(fruits)
console.log({arrayOfFruits});