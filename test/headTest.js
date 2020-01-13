const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([1, 2, 3]), 3);
assertEqual(head(['first', 'second', 'third']), 'first');
assertEqual(head(['mara']), 'mara');