/**
 * @param {string} s
 * @return {boolean}
 */
const areOccurrencesEqual = (s) => {
  let hashMap = {};
  let checker = 0;
  for (let i = 0; i < s.length; ++i) {
    if (!hashMap[s[i]]) {
      hashMap[s[i]] = 1;
    } else {
      hashMap[s[i]]++;
    }
  }
  checker = Object.values(hashMap)[0];
  for (const [key, value] of Object.entries(hashMap)) {
    if (checker !== value) {
      return false;
    }
  }
  return true;
};

console.log(areOccurrencesEqual("abacbc"));
