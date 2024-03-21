/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  return s.split(" ").filter((s) => s.trim().length).length;
};

// Example 1:

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

// Example 2:

// Input: s = "Hello"
// Output: 1
