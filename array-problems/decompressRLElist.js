/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Way with O(n^2)
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

// Use the second way O(n)
const decompressRLElist2 = (nums) => {
  const result = [];

  for (let i = 1; i < nums.length; i += 2) {
    result.push(...new Array(nums[i - 1]).fill(nums[i]));
  }

  return result;
};
console.log(decompressRLElist([1, 2, 3, 4]));
