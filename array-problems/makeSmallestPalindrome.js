/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
  let arr = s.split("");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== arr[right] && arr[left] <= arr[right]) {
      arr[right] = arr[left];
    } else if (arr[left] !== arr[right] && arr[left] >= arr[right]) {
      arr[left] = arr[right];
    }
    left++;
    right--;
  }

  return arr.join("");
};

// Example 1:

// Input: s = "egcfe"
// Output: "efcfe"
// Explanation: The minimum number of operations to make "egcfe" a palindrome is 1, and the lexicographically smallest palindrome string we can get by modifying one character is "efcfe", by changing 'g'.

// Example 2:

// Input: s = "abcd"
// Output: "abba"
// Explanation: The minimum number of operations to make "abcd" a palindrome is 2, and the lexicographically smallest palindrome string we can get by modifying two characters is "abba".

// Example 3:

// Input: s = "seven"
// Output: "neven"
// Explanation: The minimum number of operations to make "seven" a palindrome is 1, and the lexicographically smallest palindrome string we can get by modifying one character is "neven".

// Constraints:

//     1 <= s.length <= 1000
//     s consists of only lowercase English letters.
