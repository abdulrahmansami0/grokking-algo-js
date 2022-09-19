/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countKDifference = (nums, k) => {
  let count = 0;
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < nums.length; ++j) {
      if (i < j && Math.abs(nums[i] - nums[j]) === k) {
        count++;
      }
    }
  }
  return count;
};

console.log(countKDifference([1, 2, 2, 1], 1));
