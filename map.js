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

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ['azure', 'paler', 'than', 'the', 'sky'];

const results1 = map(words, function(word) {
  return word[0];
});

console.log(results1);

assertEqual(results1, [ 'a', 'p', 't', 't', 's' ]);