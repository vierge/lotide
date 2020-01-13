const tail = function(array) {
  console.log(array); // test input array
  const newArray = array.slice(1);
  return newArray;
};

module.exports = tail;
