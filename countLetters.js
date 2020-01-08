const assertEqual = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    actual = actual.join();
    expected = expected.join();
  }

  return console.log(
    actual === expected ? `✨: ${actual} === ${expected}` :
      `🚨: ${actual} !== ${expected}`
  );
};

const countLetters = string => {
  const results = {};
  for (const letter of string) {
      if (letter !== ' ') {
        results[letter] ? results[letter] ++ : results[letter] = 1;
    }
  }
  return results;
}