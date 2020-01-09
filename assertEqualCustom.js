const assertEqual = function (actual, expected) {
  
  function assert (actual, expected) {
    if (Array.isArray(actual) && Array.isArray(expected)) {
      actual = actual.join();
      expected = expected.join();
    };
  

    return console.log(
      actual === expected ? `✨: ${actual} === ${expected}` :
        `🥀: ${actual} !== ${expected}`
    );
  }
    if (actual.constructor === Object && expected.constructor === Object) {
      console.log('🚨Objects Detected!🚨')
      for (const key in actual) {
        if (!assert(actual[key], expected[key])) {
          console.log("OBJECT MISMATCH");
          return false;
        }
      }

    } else {
      assert(actual, expected);
    }

  return actual === expected;
};

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

assertEqual(obj1, obj2);
assertEqual(obj3, obj4);
assertEqual(obj2, obj3);
assertEqual([1, 2, 3], [1, 2, 3]);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Mara", "Mara");
assertEqual(1, 2);
assertEqual("Mara", 3);
