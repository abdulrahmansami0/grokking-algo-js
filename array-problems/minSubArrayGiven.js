const minSubArrayGiven = (arr, target) => {
  let minWindowSize = Infinity;
  let currentWindowSum = 0;
  let startWindow = 0;
  for (let i = 0; i < arr.length; i++) {
    currentWindowSum += arr[i];
    while (currentWindowSum >= target) {
      minWindowSize = Math.min(minWindowSize, i - startWindow + 1);
      currentWindowSum -= arr[startWindow];
      startWindow++;
    }
  }
  return minWindowSize;
};

console.log(minSubArrayGiven([4, 2, 2, 7, 8, 1, 2, 8, 10], 8));
