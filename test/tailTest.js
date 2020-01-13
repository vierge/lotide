const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([1, 2, 3]), [2, 3]);
assertEqual(tail([42]), []);
assertEqual(tail(['this', 'is', 'a', 'test']), ['is', 'a', 'test']);