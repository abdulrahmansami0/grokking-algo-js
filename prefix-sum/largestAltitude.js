/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  const prefixSum = new Array(gain.length);
  prefixSum[0] = gain[0];
  for (let i = 1; i < gain.length; ++i) {
    prefixSum[i] = prefixSum[i - 1] + gain[i];
  }

  return Math.max(...prefixSum) > 0 ? Math.max(...prefixSum) : 0;
};

// Example 1:

// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

// Example 2:

// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

// Constraints:

//     n == gain.length
//     1 <= n <= 100
//     -100 <= gain[i] <= 100
