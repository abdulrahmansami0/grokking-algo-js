/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = (n) => {
  let numbers = Array.from(String(n));
  let product = 1;
  let sum = 0;

  for (let i = 0; i < numbers.length; ++i) {
    product *= +numbers[i];
    sum += +numbers[i];
  }

  return product - sum;
};

console.log(subtractProductAndSum(234));
