/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let longestSeq = [];
  let count = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i - 1] < nums[i]) {
      count++;
    } else {
      count = 0;
    }
    longestSeq.push(count);
  }

  let max = 0;

  for (let j = 0; j < longestSeq.length; ++j) {
    if (longestSeq[j] > max) {
      max = longestSeq[j];
    }
  }

  return max + 1;
};

// Input: nums = [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
// Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
// 4.
