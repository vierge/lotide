const eqArrays = function(actual, expected) {
  if (actual.constructor === Array && expected.constructor === Array) {
    actual = actual.join();
    expected = expected.join();
  }

  console.log(
    actual === expected ? `✨: ${actual} === ${expected}` :
      `🚨: ${actual} !== ${expected}`
  );
};

