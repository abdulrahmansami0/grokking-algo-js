/**
 * @param {number[]} nums
 * @return {number[]}
 */

//  Time Complexity O(N) | Space Complexity O(N)
const leftRightDifference = (nums) => {
  let leftSum = new Array(nums.length);
  let rightSum = new Array(nums.length);
  leftSum[0] = 0;
  rightSum[nums.length - 1] = 0;

  let result = [];

  for (let i = 1, j = nums.length - 2; i < nums.length; ++i, --j) {
    leftSum[i] = leftSum[i - 1] + nums[i - 1];
    rightSum[j] = rightSum[j + 1] + nums[j + 1];
  }

  for (let i = 0; i < nums.length; ++i) {
    result.push(Math.abs(leftSum[i] - rightSum[i]));
  }

  return result;
};

// Time O(N^2) | Space O(N)
// const leftRightDifference = (nums) => {
//   let answer = [];

//   for (let i = 0; i < nums.length; ++i) {
//     let leftSum = 0;
//     let rightSum = 0;
//     for (let j = 0; j < nums.length; ++j) {
//       if (i < j) {
//         rightSum += nums[j];
//       } else if (i > j) {
//         leftSum += nums[j];
//       }
//     }
//     answer[i] = Math.abs(leftSum - rightSum);
//   }

//   return answer;
// };

// Example 1:

// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

// Example 2:

// Input: nums = [1]
// Output: [0]
// Explanation: The array leftSum is [0] and the array rightSum is [0].
// The array answer is [|0 - 0|] = [0].

// Constraints:

//     1 <= nums.length <= 1000
//     1 <= nums[i] <= 105
