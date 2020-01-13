const assertEqual = require('../assertEqual');
const middle  = require('../middle');

console.log(assertEqual(middle([3, 4, 2, 5]), [4, 2]));
console.log(assertEqual(middle([3, 4, 2]), [4]));
console.log(assertEqual(middle([5, 10, 50, 100]), [10, 50]));
console.log(assertEqual(middle([5, 10, 50]), [10]));