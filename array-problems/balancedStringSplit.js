/**
 * @param {string} s
 * @return {number}
 */

const balancedStringSplit = (s) => {
  let countState = 0;
  let countResult = 0;
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "R") countState++;
    else countState--;
    if (countState === 0) countResult++;
  }
  return countResult;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
