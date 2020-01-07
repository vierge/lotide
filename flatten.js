const eqArrays = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    actual = actual.join();
    expected = expected.join();
  }

  console.log(
    actual === expected ? `✨: ${actual} === ${expected}` :
      `🚨: ${actual} !== ${expected}`
  );
};

const flatten = function(array) {
  let result = [];
  for(element of array) {
    Array.isArray(element) ? result.push(element.join()) :
      result.push(element);
  }
return result;
}
