/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  let min = 99999;
  let max = -99999;
  for (let i = 0; i < nums.length; ++i) {
    if (min > nums[i]) {
      min = nums[i];
    }
    if (max < nums[i]) {
      max = nums[i];
    }
  }

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== min && nums[i] !== max) {
      return nums[i];
    }
  }
  return -1;
};

console.log(findNonMinOrMax((nums = [3, 2, 1, 4])));
