const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Phila',
        temp: '92F'
    }
};


// Object destructuring in es6
// using default values i.e Amogh
const {name = 'Amogh', age} = person;
// using variabel name temperature as per our use
const {city, temp: temperature} = person.location; 

console.log(name, age, city, temperature);