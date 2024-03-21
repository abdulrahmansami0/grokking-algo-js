/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  let ans = "";
  let words = title.toLowerCase().split(" ");
  for (let i = 0; i < words.length; ++i) {
    if (words[i].length > 2) {
      ans += words[i][0].toUpperCase() + words[i].slice(1, words[i].length);
    } else {
      ans += words[i];
    }
    ans += " ";
  }

  return ans.trim(" ");
};
