const assertEqual = function (actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    actual = actual.join();
    expected = expected.join();
  }

  console.log(
    actual === expected ? `✨: ${actual} === ${expected}` :
      `🚨: ${actual} !== ${expected}`
  );
};



const countOnly = function (allItems, itemsToCount) {
  const results = {};
  console.log(itemsToCount);
  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      results[item] ? console.log('increment!') + (results[item] ++) : console.log('found a match!') + (results[item] = 1);
    }
  } // why does a const variable work but not a let?
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
  'Joe',
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1['Jason'], 1);
assertEqual(result1['Karima'], undefined);
assertEqual(result1['Fang'], 2);

