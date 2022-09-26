const solution = (inputArray) => {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < inputArray.length - 1; ++i) {
    let product = inputArray[i] * inputArray[i + 1];
    if (max < product) {
      max = product;
    }
  }
  return max;
};
console.log(solution([3, 6, -2, -5, 7, 3]));
