/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number = (num) => {
  let digits = Array.from(String(num));

  for (let i = 0; i < digits.length; ++i) {
    if (digits[i] === "6") {
      digits[i] = "9";
      break;
    }
  }

  return digits.join("");
};

console.log(maximum69Number(9669));

// Input: num = 9669
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.
