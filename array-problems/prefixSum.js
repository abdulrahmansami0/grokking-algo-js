const prefixSum = (arr) => {
  let sum = 0;
  let result = [];
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
    result.push(sum);
  }
  return result;
};

let arr = [2, 4, 6, 1, 7, 4];
console.log(prefixSum(arr));

//
const prefixSumInPlace = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
    arr[i] = sum;
  }
  return arr;
};

console.log(prefixSumInPlace(arr));
