/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const map = new Map();
  map.set(0, -1);
  let count = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
    } else {
      count--;
    }

    if (map.has(count)) {
      max = Math.max(max, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }

  return max;
};

// Example 1:

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

// Example 2:

// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

// Constraints:

//     1 <= nums.length <= 105
//     nums[i] is either 0 or 1.
