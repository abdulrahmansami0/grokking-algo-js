/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let hashMap = {};
  for (let i = 0; i < nums.length; ++i) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]]++;
    }
  }

  let arr = [];
  Object.entries(hashMap).map(([key, val]) => {
    if (val > nums.length / 3) {
      arr.push(key);
    }
  });

  return arr;
};

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]

// Example 2:

// Input: nums = [1]
// Output: [1]

// Example 3:

// Input: nums = [1,2]
// Output: [1,2]
