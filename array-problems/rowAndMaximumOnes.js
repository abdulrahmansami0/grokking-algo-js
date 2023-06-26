/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const rowAndMaximumOnes = (mat) => {
  let max = 0;
  let index = 0;
  for (let i = 0; i < mat.length; ++i) {
    let count = 0;
    for (let j = 0; j < mat[i].length; ++j) {
      if (mat[i][j] === 1) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      index = i;
    }
  }

  return [index, max];
};

let mat = [
  [0, 1],
  [1, 0],
];

console.log(rowAndMaximumOnes(mat));

// Input: mat = [[0,1],[1,0]]
// Output: [0,1]
// Explanation: Both rows have the same number of 1's. So we return the index of the smaller row, 0, and the maximum count of ones (1). So, the answer is [0,1].
