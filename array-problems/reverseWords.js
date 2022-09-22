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

const reverseWords2 = (s) => {
  return s
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};

console.log(reverseWords2("Let's take LeetCode contest"));
