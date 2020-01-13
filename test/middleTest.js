const assert = require('chai').assert;
const middle  = require('../middle');

describe('#middle', () => {
  it('should return the middle index of an odd length array', () => {
    assert.deepEqual(middle([3, 4, 2, 5]), [4, 2]);
  });
  it('should return the middle two indexes of an even numbered array', () => {
    assert.deepEqual(middle([5, 10, 50, 100]), [10, 50]);
  });
}); 









// console.log(assertEqual(middle([3, 4, 2, 5]), [4, 2]));
// console.log(assertEqual(middle([3, 4, 2]), [4]));
// console.log(assertEqual(middle([5, 10, 50, 100]), [10, 50]));
// console.log(assertEqual(middle([5, 10, 50]), [10]));