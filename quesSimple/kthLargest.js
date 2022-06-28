const kthLargest = (arr, target) => {
  arr.sort((a, b) => a - b);
  if (target === 0) return arr;
  arr.pop();
  return kthLargest(arr, target - 1);
};

console.log(kthLargest([2, 4, 6, 8, 4, 7, 9, 1], 4));
