/**
 * @param {number[]} nums
 * @return {number}
 */

// Time O(N) | Space O(N)
var pivotIndex = function (nums) {
  const sumLeft = new Array(nums.length);
  sumLeft[0] = nums[0];
  const sumRight = new Array(nums.length);
  sumRight[nums.length - 1] = nums[nums.length - 1];

  for (let i = 1, j = nums.length - 2; i < nums.length; ++i, --j) {
    sumLeft[i] = sumLeft[i - 1] + nums[i];
    sumRight[j] = sumRight[j + 1] + nums[j];
  }

  for (let i = 0; i < sumLeft.length; ++i) {
    if (sumLeft[i] === sumRight[i]) {
      return i;
    }
  }

  return -1;
};

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.

// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0
