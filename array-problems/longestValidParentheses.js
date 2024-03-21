/**
 * @param {string} s
 * @return {number}
 */

var longestValidParentheses = function (s) {
  let isOk = [];
  let stack = [];

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length > 0) {
        isOk[stack.pop()] = 1;
        isOk[i] = 1;
      }
    }
  }

  let count = 0;
  let ans = 0;
  for (let i = 0; i < s.length; ++i) {
    if (isOk[i]) {
      count++;
    } else {
      count = 0;
    }
    ans = Math.max(ans, count);
  }

  return ans;
};

// Example 1:

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".

// Example 2:

// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".

// Example 3:

// Input: s = ""
// Output: 0
