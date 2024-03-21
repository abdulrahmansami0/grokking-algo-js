const maximumSumOfSubArray = (nums, k) => {
  let max = -Infinity;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    if (right - left + 1 === k) {
      max = Math.max(max, sum);
      sum -= nums[left];
      left++;
    }
  }

  return max;
};

console.log(maximumSumOfSubArray([1, 3, 10, -3, 5, 3, 6, 7], 3));
