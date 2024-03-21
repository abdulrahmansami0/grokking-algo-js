/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let set = new Set();
  let max = -1;
  for (let i = 0; i < nums.length; ++i) {
    set.add(nums[i]);
  }

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] > max && set.has(-nums[i])) {
      max = nums[i];
    }
  }

  return max;
};


