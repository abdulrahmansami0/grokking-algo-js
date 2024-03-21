/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  let count = 0;
  let greater = [];
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "1") count++;
    greater.push("0");
  }

  for (let i = 0; i < s.length; ++i) {
    if (count > 1 && i === 0) {
      count--;
      greater[i] = "1";
    } else if (count > 1 && i !== 0) {
      count--;
      greater[i] = "1";
    } else if (i === greater.length - 1) {
      count--;
      greater[i] = "1";
    }
  }

  return greater.join("");
};

// Note that the resulting string can have leading zeros.

// Example 1:

// Input: s = "010"
// Output: "001"
// Explanation: Because there is just one '1', it must be in the last position. So the answer is "001".

// Example 2:

// Input: s = "0101"
// Output: "1001"
// Explanation: One of the '1's must be in the last position. The maximum number that can be made with the remaining digits is "100". So the answer is "1001".

// Constraints:

// 1 <= s.length <= 100
// s consists only of '0' and '1'.
// s contains at least one '1'.
