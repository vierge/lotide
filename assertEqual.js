const assertEqual = function(actual, expected) {
  console.log(
    actual === expected ? `✨: ${actual} === ${expected}` :
      `🚨: ${actual} !== ${expected}`
  );
};

//test
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Mara", "Mara");
assertEqual(1, 2);
assertEqual("Mara", 3);