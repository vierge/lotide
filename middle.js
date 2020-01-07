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

const middle = function(arr) {
  let result = [];
  if (arr.length > 2) {
    let flag;
    arr.length % 2 ? flag = 1 : flag = 2;
    let selector = flag === 2 ? Math.floor(arr.length / 2 - 1) : Math.floor(arr.length / 2);
    result = arr.slice(selector, (selector + flag));
  }
  return result;
}

console.log(eqArrays(middle([3, 4, 2, 5]), [4, 2]));
console.log(eqArrays(middle([3, 4, 2]), [4]));
console.log(eqArrays(middle([5, 10, 50, 100]), [10, 50]));
console.log(eqArrays(middle([5, 10, 50]), [10]));