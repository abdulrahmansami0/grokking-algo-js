const quicksort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    var left = [];
    var right = [];
    var newArray = [];
    var pivot = arr.pop();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return newArray.concat(quicksort(left), pivot, quicksort(right));
  }
};
console.log(quicksort([10, 5, 2, 3]));
