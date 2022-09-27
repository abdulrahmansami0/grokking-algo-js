// O(n) time and space o(d)
const productSum = (array, multiplier = 1) => {
  let sum = 0;
  for (const number of array) {
    if (typeof number === "object") {
      sum += productSum(number, multiplier + 1);
    } else {
      sum += number;
    }
  }
  return sum * multiplier;
};

console.log(productSum([2, 3, [2, 3]]));
