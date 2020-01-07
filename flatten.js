const flatten = function(array) {
  let result = [];
  for(element of array) {
    Array.isArray(element) ? result.push(element.join()) :
      result.push(element);
  }
return result;
}
