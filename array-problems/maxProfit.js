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

// Slide window
// var maxProfitSlide = function (prices) {
//   let left = 0;
//   let right = 0;
//   let max = 0;

//   while (right < prices.length) {
//       if (prices[left] < prices[right]) {
//           let profit = prices[right] - prices[left];
//           max = Math.max(max, profit);
//       } else {
//           left = right;
//       }
//       right++;
//   }

//   return max;
// };
