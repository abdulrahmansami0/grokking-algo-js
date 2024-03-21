/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  if (words.length !== s.length) return false;

  for (let i = 0; i < words.length; ++i) {
    if (words[i][0] !== s[i]) return false;
  }

  return true;
};

let words = ["an", "apple"];
let s = "a";

console.log(isAcronym(words, s));

// Input: words = ["alice","bob","charlie"], s = "abc"
// Output: true
// Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym.
