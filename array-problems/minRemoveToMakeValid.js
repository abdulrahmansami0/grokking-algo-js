/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let isOk = [];
  let stack = [];

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length > 0) {
        isOk[stack.pop()] = 1;
        isOk[i] = 1;
      } else {
        continue;
      }
    } else {
      continue;
    }
  }

  let ans = "";
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "(" || s[i] === ")") {
      if (isOk[i]) {
        ans += s[i];
      }
    } else {
      ans += s[i];
    }
  }

  return ans;
};


// Example 1:

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

// Example 2:

// Input: s = "a)b(c)d"
// Output: "ab(c)d"

// Example 3:

// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.
