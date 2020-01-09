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

const takeUntil = function(array, callback) {
  const results = [];
  for (let element of array) {
    if(callback(element)) {return results;}
    results.push(element);
  }
  return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["It", "was", "dusk", "in", "the", "city", "of", "devils", ",", "The", "city", "of", "Gay", "Baby"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertEqual(results2, ["It", "was", "dusk", "in", "the", "city", "of", "devils"]);


