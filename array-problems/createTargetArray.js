/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = (nums, index) => {
  let target = [];
  for (let i = 0; i < nums.length; ++i) {
    if (index[i] >= target.length) {
      target.push(nums[i]);
    } else {
      target.splice(index[i], 0, nums[i]);
    }
  }
  return target;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
