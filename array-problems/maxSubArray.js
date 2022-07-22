// solve using slide window
const maxSubArray = (arr, k) => {
  let maxValue = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (i >= k - 1) {
      maxValue = Math.max(maxValue, currentSum);
      currentSum -= arr[i - (k - 1)];
    }
  }
  return maxValue;
};

console.log(maxSubArray([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3));
