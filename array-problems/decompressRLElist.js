/**
 * @param {number[]} nums
 * @return {number[]}
 */

const decompressRLElist = (nums) => {
  let result = [];
  for (let i = 0; i < nums.length; ++i) {
    if (i >= 0) {
      let freq = nums[2 * i];
      for (let j = 0; j < freq; ++j) {
        result.push(nums[2 * i + 1]);
      }
    }
  }
  return result;
};

console.log(decompressRLElist([1, 2, 3, 4]));
