/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  let words = s.split(" ");
  for (let i = 0; i < words.length; ++i) {
    words[i] = words[i].split("").reverse().join("");
  }
  return words.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
