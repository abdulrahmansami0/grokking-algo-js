/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canBeIncreasing = (nums) => {
  let count = 0;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] <= nums[i - 1]) {
      if (count === 1) return false;
      count++;
      if (i > 1 && nums[i] <= nums[i - 2]) {
        nums[i] = nums[i - 1];
      }
    }
  }
  return true;
};

console.log(canBeIncreasing([1, 2, 10, 5, 7]));
