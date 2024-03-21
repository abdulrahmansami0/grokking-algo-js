/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      if (
        !stack.length ||
        (s[i] === ")" && stack[stack.length - 1] !== "(") ||
        (s[i] === "}" && stack[stack.length - 1] !== "{") ||
        (s[i] === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
};

// Input: s = "()[]{}"
// Output: true
