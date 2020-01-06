const assertEqual = function(actual, expected) {
  if (actual.constructor === Array && expected.constructor === Array) {
    actual = actual.join();
    expected = expected.join();
  }

  console.log(
    actual === expected ? `✨: ${actual} === ${expected}` :
      `🚨: ${actual} !== ${expected}`
  );
};

const tail = function(array) {
  console.log(array); // test input array
  const newArray = array.slice(1);
  return newArray;
};

assertEqual(tail([1, 2, 3]), [2, 3]);
assertEqual(tail([42]), []);
assertEqual(tail(['this', 'is', 'a', 'test']), ['is', 'a', 'test']);
assertEqual(2, 2); // testing whether
assertEqual(3, 6); // assert equal checks for arrays