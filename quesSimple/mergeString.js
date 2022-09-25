var mergeAlternately = function (word1, word2) {
  let count1 = 0;
  let count2 = 0;
  let newStr = [];
  let newWord1 = word1.split("");
  let newWord2 = word2.split("");
  for (let i = 0; i < newWord1.length + newWord2.length; ++i) {
    if (count1 !== newWord1.length) {
      newStr.push(newWord1[i]);
      count1++;
    }
    if (count2 !== newWord2.length) {
      newStr.push(newWord2[i]);
      count2++;
    }
  }
  return newStr.join("");
};

console.log(mergeAlternately("abd", "cdf"));
