const assert = require('chai').assert;
const tail = require('../tail');


describe('#tail', () => {
  it('should return an array without the head', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
    assert.deepEqual(tail(['this', 'is', 'a', 'test']), ['is', 'a', 'test']);
  });
  it('should return an empty array if the input has only one index', () => {
    assert.deepEqual(tail([42]), []);
  });
});


// assertEqual(tail([1, 2, 3]), [2, 3]);
// assertEqual(tail([42]), []);
// assertEqual(tail(['this', 'is', 'a', 'test']), ['is', 'a', 'test']);