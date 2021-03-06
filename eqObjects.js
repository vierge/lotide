const assertEqual = function (actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    actual = actual.join();
    expected = expected.join();
  };

  console.log(
    actual === expected ? `✨: ${actual} === ${expected}` :
      `🥀: ${actual} !== ${expected}`
  );

  return actual === expected;
};

const eqObjects = function (actual, expected) {
  if (actual.constructor === Object && expected.constructor === Object) {
    console.log('🚨Objects Detected!🚨')
    for (const key in actual) {
      if (!assertEqual(actual[key], expected[key])) {
        console.log("OBJECT MISMATCH");
        return false;
      }
    }
  }
  return true;
}

const obj1 = {
  first: 'first',
  second: 2,
  third: 3
};

const obj2 = {
  second: 2,
  third: 3,
  first: 'first'
};

const obj3 = {
  first: [1, 2],
  second: 2,
  third: 'three'
}

const obj4 = {
  first: [1, 2],
  second: 2,
  third: 'three'
}

const obj5 = {
  
}

eqObjects(obj1, obj2);
eqObjects(obj3, obj4);
eqObjects(obj2, obj3);
