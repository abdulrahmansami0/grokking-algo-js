/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
  }

  if (sum - nums[0] === 0) return 0;
  let leftSum = 0;
  sum -= nums[0];
  for (let i = 1; i < nums.length; ++i) {
    leftSum += nums[i - 1];
    sum -= nums[i];
    if (leftSum === sum) {
      return i;
    }
  }

  return -1;
};
