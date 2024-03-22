/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let prefix = 0;
  let result = 0;
  let map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; ++i) {
    prefix = (prefix + nums[i]) % k;
    if (prefix < 0) prefix += k;
    if (map.has(prefix)) {
      result += map.get(prefix);
      map.set(prefix, map.get(prefix) + 1);
    } else {
      map.set(prefix, 1);
    }
  }

  return result;
};

// Example 1:

// Input: nums = [4,5,0,-2,-3,1], k = 5
// Output: 7
// Explanation: There are 7 subarrays with a sum divisible by k = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

// Example 2:

// Input: nums = [5], k = 9
// Output: 0

// Constraints:

//     1 <= nums.length <= 3 * 104
//     -104 <= nums[i] <= 104
//     2 <= k <= 104
