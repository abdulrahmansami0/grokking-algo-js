/**
 * @param {number} num
 * @return {number}
 */
const minimumSum = (num) => {
  let arr = String(num)
    .split("")
    .sort((a, b) => a - b);
  return Number(arr[0] + arr[3]) + Number(arr[1] + arr[2]);
};

console.log(minimumSum(2932));
