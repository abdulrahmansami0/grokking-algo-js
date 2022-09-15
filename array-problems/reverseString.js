/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const reverseString = (s) => {
  for (let i = 0; i < s.length / 2; ++i) {
    let n = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - i - 1] = n;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
