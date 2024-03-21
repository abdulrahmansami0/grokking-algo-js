/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//  Time O(N) | Space O(N)
var maxSlidingWindow = function (nums, k) {
  let deque = [];
  let maxArr = [];

  for (let i = 0; i < k; ++i) {
    deque.push(nums[i]);
  }

  maxArr.push(Math.max(...deque));

  for (let i = k; i < nums.length; ++i) {
    deque.push(nums[i]);
    deque.shift();
    maxArr.push(Math.max(...deque));
  }

  return maxArr;
};

var maxSlidingWindowDeque = function (nums, k) {
  const deque = [];
  const maxArr = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove indices that are out of the current window
    while (deque.length && deque[0] < i - k + 1) {
      deque.shift();
    }

    // Remove indices of smaller elements from the deque
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // Add current index to the deque
    deque.push(i);

    // Add maximum element in the current window to maxArr
    if (i >= k - 1) {
      maxArr.push(nums[deque[0]]);
    }
  }

  return maxArr;
};

// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

//     1 <= nums.length <= 105
//     -104 <= nums[i] <= 104
//     1 <= k <= nums.length

// var maxSlidingWindow = function (nums, k) {
//     let res = [];
//     let deque = [];
//     for (let i = 0; i < nums.length; i++) {
//         while (deque.length && nums[deque[deque.length - 1]] <= nums[i])
//             deque.pop();
//         deque.push(i);
//         if (deque[0] <= i - k) deque.shift();
//         if (i >= k - 1) res.push(nums[deque[0]]);
//     }
//     return res;
// };
