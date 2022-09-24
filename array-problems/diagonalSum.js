/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = (mat) => {
  let sum = 0;
  for (let i = 0; i < mat.length; ++i) {
    for (let j = 0; j < mat[i].length; ++j) {
      if (i === j || i + j === mat.length - 1) {
        sum += mat[i][j];
      }
    }
  }
  return sum;
};

const diagonalSum2 = (mat) => {
  let matLen = mat.length;
  let i = 0;
  let j = 0;
  let k = matLen - 1;
  let sum = 0;
  while (i < matLen) {
    sum += mat[i][j] + mat[i][k];
    i++;
    j++;
    k--;
  }
  if (matLen % 2 !== 0) {
    let mid = Math.floor(matLen / 2);
    sum -= mat[mid][mid];
  }
  return sum;
};
