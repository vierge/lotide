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

const without = function (source, itemsToRemove) {
  let result = source;
  for(element of itemsToRemove) {  
    for(index in source) {
      if (element === source[index]) {
        result.splice(index, 1);
      }
    }
  }
  return result;
}

eqArrays(without([1, 2, 3], [1]), [2, 3]);
eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
