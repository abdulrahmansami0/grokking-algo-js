/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */

// O(n^3)
var arithmeticTriplets = function (nums, diff) {
  let count = 0;
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i; j < nums.length; ++j) {
      for (let k = j; k < nums.length; ++k) {
        if (nums[j] - nums[i] == diff && nums[k] - nums[j] == diff) {
          count++;
        }
      }
    }
  }

  return count;
};
