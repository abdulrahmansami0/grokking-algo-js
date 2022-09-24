/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  nums.sort((a, b) => a - b);
  return (nums[nums.length - 1] - 1) * (nums[nums.length - 2] - 1);
};

console.log(maxProduct([3, 4, 5, 2]));
