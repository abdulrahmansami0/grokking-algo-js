/**
 * @param {number} num
 * @return {number}
 */
const countDigits = (num) => {
  let nums = String(num);
  let count = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (num % +nums[i] === 0) {
      count++;
    }
  }

  return count;
};

console.log(countDigits(1248));

// Input: num = 1248
// Output: 4
// Explanation: 1248 is divisible by all of its digits, hence the answer is 4.
