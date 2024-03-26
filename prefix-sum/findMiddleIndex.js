/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  let totalSum = 0;

  for (let i = 0; i < nums.length; ++i) {
    totalSum += nums[i];
  }

  if (totalSum - nums[0] === 0) return 0;
  let leftSum = 0;
  totalSum -= nums[0];
  for (let i = 1; i < nums.length; ++i) {
    leftSum += nums[i - 1];
    totalSum -= nums[i];
    if (leftSum === totalSum) {
      return i;
    }
  }

  return -1;
};

//  let suffixSum = totalSum - prefixSum
