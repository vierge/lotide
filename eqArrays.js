// const eqArrays = function(arr1, arr2) {
//   if (Array.isArray(arr1) && Array.isArray(arr2)) {
//     arr1 = arr1.join();
//     arr2 = arr2.join();
//   };
//   console.log(arr1, arr2);
// };
  
const eqArrays = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    actual = actual.join();
    expected = expected.join();
  };

  return console.log(
    actual === expected ? `✨: ${actual} === ${expected}` :
      `🚨: ${actual} !== ${expected}`
  );
};