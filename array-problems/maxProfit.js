/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let min = Number.POSITIVE_INFINITY;
  let max = 0;
  for (let i = 0; i < prices.length; ++i) {
    if (prices[i] < min) {
      min = prices[i];
    }
    if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
