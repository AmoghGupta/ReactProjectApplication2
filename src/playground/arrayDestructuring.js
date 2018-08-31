// array destructure

const address = ['1299 south whales', , 'pennysylvania', '1928'];

var [house_number, city, state, pincode] = address;

console.log(house_number, city, state, pincode);

// setting defaults
var [, city='kanpur', , ] = address;
console.log(city);



