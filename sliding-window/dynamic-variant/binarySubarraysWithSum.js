/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let count = 0;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; ++right) {
    sum += nums[right];
    while (left < right && sum > goal) {
      sum -= nums[left];
      left++;
    }
    if (sum === goal) {
      count++;
      let k = left;
      while (k < right && nums[k] === 0) {
        count++;
        k++;
      }
    }
  }
  return count;
};

// Example 1:

// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]

// Example 2:

// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15

// Constraints:

//     1 <= nums.length <= 3 * 104
//     nums[i] is either 0 or 1.
//     0 <= goal <= nums.length
