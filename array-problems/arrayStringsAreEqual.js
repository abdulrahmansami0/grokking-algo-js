/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
const arrayStringsAreEqual = (word1, word2) => {
  let str1 = "";
  let str2 = "";

  word1.forEach((el) => (str1 += el));
  word2.forEach((el) => (str2 += el));

  if (str1 !== str2) return false;
  return true;
};

let word1 = ["ab", "c"],
  word2 = ["a", "bc"];

console.log(arrayStringsAreEqual(word1, word2));

// -----------------------------------
// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
