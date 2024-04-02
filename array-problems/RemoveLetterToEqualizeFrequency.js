/**
 * @param {string} word
 * @return {boolean}
 */

function isEqual(str, i) {
  str = str.slice(0, i) + str.slice(i + 1);
  const freqMap = new Map();

  for (let char of str) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  const freqValues = Array.from(freqMap.values());

  for (let j = 1; j < freqValues.length; j++) {
    if (freqValues[j] !== freqValues[j - 1]) {
      return false;
    }
  }

  return true;
}

var equalFrequency = function (word) {
  for (let i = 0; i < word.length; i++) {
    if (isEqual(word, i)) {
      return true;
    }
  }
  return false;
};

// Example 1:

// Input: word = "abcc"
// Output: true
// Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.

// Example 2:

// Input: word = "aazz"
// Output: false
// Explanation: We must delete a character, so either the frequency of "a" is 1 and the frequency of "z" is 2, or vice versa. It is impossible to make all present letters have equal frequency.

// Constraints:

//     2 <= word.length <= 100
//     word consists of lowercase English letters only.
