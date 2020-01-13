const assertEqual = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    actual = actual.join();
    expected = expected.join();
  };

  return actual === expected ? `✨: ${actual} === ${expected}` :
      `🚨: ${actual} !== ${expected}`;
};

module.exports = assertEqual;