/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    while (nums[left] % 2 === 0 && left < right) {
      left++;
    }

    while (nums[right] % 2 !== 0 && left < right) {
      right--;
    }

    if (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }

  return nums;
};
