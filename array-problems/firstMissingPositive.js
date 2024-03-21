/**
 * @param {number[]} nums
 * @return {number}
 */

// time complexity O(n)
// space complexity O(1)
var firstMissingPositive = function (nums) {
  nums = new Set(nums);
  let count = 1;
  while (nums.has(count)) {
    count++;
  }

  return count;
};

console.log(firstMissingPositive([1, 2, 0]));

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.

// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.

// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.
