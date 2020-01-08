const assertEqual = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    actual = actual.join();
    expected = expected.join();
  };

  return console.log(
    actual === expected ? `✨: ${actual} === ${expected}` :
      `🚨: ${actual} !== ${expected}`
  );
};


const findKeyByValue = function(object, value) {
  let result = 'not found';
  for (key in object) {
    if (object[key] === value) {result = key};
  }
  return result;
} 



const bestTVShowsByGenre = {
  sci_fi: 'Star Trek: Deep Space Nine',
  comedy: 'Broad City',
  drama: 'The Wire'
};


assertEqual(findKeyByValue(bestTVShowsByGenre, 'Star Trek: Deep Space Nine'), 'sci_fi' );