const bubbleSort = function(arr) {
  console.log('bubbleSorting....🧼');
  let done = false;
  while (!done) {
    done = true;
    for (i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        console.log('hit!' + arr[i - 1] + ' and ' + arr[i]);
        done = false;
        let hit = arr[i - 1];
        arr [i - 1] = arr[i];
        arr[i] = hit;
      }
    }
  }
    return arr;
}