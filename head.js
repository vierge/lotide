// assertEqual function
const assertEqual = function(actual, expected) {
  console.log(
    actual === expected ? `✨: ${actual} === ${expected}` :
      `🚨: ${actual} !== ${expected}`
  );
};

// Main

const head = function(array) {
  return array[0];
}



assertEqual(head([1, 2, 3]), 3);
assertEqual(head(['first', 'second', 'third']), 'first');
assertEqual(head(['mara']), 'mara');