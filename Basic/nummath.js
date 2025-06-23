// const { log } = require("console");

// const number=200

// console.log(number);

// const balance=new Number(1000.50);
// console.log(balance);

// console.log(balance.toFixed(2));
// console.log(balance.toPrecision(4));
// console.log(balance.toExponential(2));
// console.log(balance.valueOf());
// console.log(balance.toLocaleString("en-IN", { style: "currency", currency: "INR" }));

// console.log(Math);
// console.log(Math.abs(-5)); // Absolute value
// console.log(Math.ceil(4.2)); // Round up
// console.log(Math.floor(4.8)); // Round down
// console.log(Math.round(4.5)); // Round to nearest
// console.log(Math.max(1, 2, 3, 4, 5)); // Maximum value
// console.log(Math.min(1, 2, 3, 4, 5)); // Minimum value
// console.log(Math.random()); // Random number between 0 and 1
// console.log(Math.sqrt(16)); // Square root
// console.log(Math.pow(2, 3)); // Power (2^3)
// console.log(Math.PI); // Value of Pi
// console.log(Math.E); // Value of Euler's number
// console.log(Math.trunc(4.9)); // Truncate decimal part

// console.log(Math.round(Math.random()*10+1)); // Random number between 1 and 10

const min=10
const max=20
const randomNumber=Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber); // Random number between 10 and 20