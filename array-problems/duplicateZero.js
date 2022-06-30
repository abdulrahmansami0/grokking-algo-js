var duplicateZeros = function (arr) {
  let queue = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === 0) {
      queue.push(0);
    }
    queue.push(arr[i]);
    arr[i] = queue.shift();
  }
  return arr;
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
