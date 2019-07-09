
// Object Desructuring


// const person = {
//     name: 'John',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }

// const {name: firstName = 'Anonymous', age} = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if (city && temperature) {
//     console.log(`${city} is ${temperature}.`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher:  {
//         name: 'Penguin'
//     }
// }


// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);



// Array Desructuring


const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);


const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [drink, , mediumPrice] = item;


console.log(`A medium ${drink} costs ${mediumPrice}`);