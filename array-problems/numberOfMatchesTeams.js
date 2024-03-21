/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let matches = 0;
  let advance = 0;
  let result = 0;
  while (n >= 1) {
    if (n % 2 === 0) {
      matches = n / 2;
      advance = n / 2;
      n = advance;
    } else {
      matches = (n - 1) / 2;
      advance = (n - 1) / 2;
      n = advance;
      matches++;
    }
    result += matches;
  }
  return result - 1;
};

console.log(numberOfMatches(7));
