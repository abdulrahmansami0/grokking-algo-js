/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumDifference = (nums) => {
  let min = Number.POSITIVE_INFINITY;
  let max = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] < min) {
      min = nums[i];
    }
    if (nums[i] - min > max) {
      max = nums[i] - min;
    }
  }
  return max ? max : -1;
};

console.log(maximumDifference([7, 1, 5, 4]));
