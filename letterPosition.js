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

const letterPositions = sentence => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== ' ') {
      results[letter] ? results[letter].push(i) :
      results[letter] = [i];
    } 
  }
  return results;
}

console.log(`test run: position of 'l' in hello`);
assertEqual(letterPositions("hello").l, [2, 3]);
console.log(letterPositions("lighthouse is the place"));