const eqArrays = function(actual, expected) {
  // if (Array.isArray(actual) && Array.isArray(expected)) {
  //   actual = actual.join();
  //   expected = expected.join();
  // }

  console.log(
    actual === expected ? `✨: ${actual} === ${expected}` :
      `🚨: ${actual} !== ${expected}`
  );
};



const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (const item of allItems) {
    // console.log(item);
    results[item] ? results[item] =+ 1 : results[item] = 1;
  }
  return results;
}

const firstNames = [
  'Karl',
  'Salima',
  'Agouhana',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe'
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

eqArrays(result1['Jason'], 1);
eqArrays(result1['Karima'], undefined);
eqArrays(result1['Fang'], 2);

