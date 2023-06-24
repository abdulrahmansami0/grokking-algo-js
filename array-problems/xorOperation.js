/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = (n, start) => {
  let nums = [];
  let result;
  for (let i = 0; i < n; ++i) {
    nums[i] = start + 2 * i;
    result ^= nums[i];
  }

  return result;
};

console.log(xorOperation((n = 5), (start = 0)));
