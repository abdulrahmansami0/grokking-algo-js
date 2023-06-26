/**
 * @param {number} n
 * @return {boolean}
 */

const isPalindromic = (num) => {
  let rvsNum = String(num).split("").reverse().join("");
  return num === rvsNum;
};
const isStrictlyPalindromic = (n) => {
  for (let i = 2; i < n; ++i) {
    let num = n.toString(i);
    if (!isPalindromic(num)) return false;
  }
  return true;
};

console.log(isStrictlyPalindromic(9));

// Input: n = 9
// Output: false
// Explanation: In base 2: 9 = 1001 (base 2), which is palindromic.
// In base 3: 9 = 100 (base 3), which is not palindromic.
// Therefore, 9 is not strictly palindromic so we return false.
// Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.
