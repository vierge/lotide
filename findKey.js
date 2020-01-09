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

const findKey = function(object, callback) {
  for (let item in object) {
    if (callback(object[item])) {return item;}
  }
  return console.log('none found...');
}

const starsInTheSky = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  // "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}



assertEqual(findKey(starsInTheSky, x => x.stars === 2), 'Ora');
assertEqual(findKey(starsInTheSky, x => x.stars === 3), 'Akaleri');
assertEqual(findKey(starsInTheSky, x => x.stars === 1), 'Blue Hill');
