/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let hashMap = {};

  for (let i = 0; i < nums.length; ++i) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]]++;
    }
  }

  let max = 0;
  Object.entries(hashMap).map(([key, val]) => {
    if (max < val) {
      max = val;
    }
  });

  let count = 0;
  Object.entries(hashMap).map(([key, val]) => {
    if (max === val) {
      count = count + val;
    }
  });

  return count;
};

// Example 1:

// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.

// Example 2:

// Input: nums = [1,2,3,4,5]
// Output: 5
// Explanation: All elements of the array have a frequency of 1 which is the maximum.
// So the number of elements in the array with maximum frequency is 5.
