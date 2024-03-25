/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[0];

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) {
      break;
    }
  }

  slow = nums[0];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2

// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3

// Example 3:

// Input: nums = [3,3,3,3,3]
// Output: 3

 

// Constraints:

//     1 <= n <= 105
//     nums.length == n + 1
//     1 <= nums[i] <= n
//     All the integers in nums appear only once except for precisely one integer which appears two or more times.

 

// Follow up:

//     How can we prove that at least one duplicate number must exist in nums?
//     Can you solve the problem in linear runtime complexity?
