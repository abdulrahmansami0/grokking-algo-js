/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let counter = 0;
  let result = 0;

  let hashMap = {};
  for (let i = 0; i < allowed.length; ++i) {
    hashMap[allowed[i]] = 1;
  }

  for (let i = 0; i < words.length; ++i) {
    for (let j = 0; j < words[i].length; ++j) {
      if (hashMap[words[i][j]]) {
        counter++;
      }
    }
    if (counter === words[i].length) result++;
    counter = 0;
  }
  return result;
};

let allowed = "ab";
let words = ["ad", "bd", "aaab", "baa", "badab"];

console.log(countConsistentStrings(allowed, words));

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
