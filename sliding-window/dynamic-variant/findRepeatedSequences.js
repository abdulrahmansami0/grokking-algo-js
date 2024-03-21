/**
 * @param {string} s
 * @return {string[]}
 */

// Time complexity O(N) | Space complexity O(N)
var findRepeatedDnaSequences = function (s) {
  let k = 10;
  const repeatedSequences = new Set();
  const seen = new Set();

  for (let i = 0; i <= s.length - k; ++i) {
    const subArray = s.slice(i, i + k);
    if (seen.has(subArray)) {
      repeatedSequences.add(subArray);
    } else {
      seen.add(subArray);
    }
  }

  return Array.from(repeatedSequences);
};

const s = "ABCABCDABABCDABCD";

console.log(findRepeatedSequences(s));


// Time complexity O(N*K) | Space complexity O(N)
var findRepeatedDnaSequencesBruteForce = function (s) {
    let k = 10;
    const repeatedSequences = new Set();
    const seen = new Set();

    for (let i = 0; i <= s.length - k; ++i) {
        let subStr = "";
        for (let j = i; j < i + k; ++j) {
            subStr += s[j];
        }
        if (seen.has(subStr)) {
            repeatedSequences.add(subStr);
        } else {
            seen.add(subStr);
        }
    }

    return Array.from(repeatedSequences);
};