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

module.exports = middle;

