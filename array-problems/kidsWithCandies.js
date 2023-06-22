/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

const kidsWithCandies = (candies, extraCandies) => {
  let result = [];
  for (let i = 0; i < candies.length; ++i) {
    let summation = candies[i] + extraCandies;
    result.push(false);
    for (let j = 0; j < candies.length; ++j) {
      if (summation < candies[j]) {
        result[i] = false;
        break;
      } else {
        result[i] = true;
      }
    }
  }
  return result;
};

let candies = [2, 3, 5, 1, 3];
let extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
