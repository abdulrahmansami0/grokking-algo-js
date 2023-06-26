/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  let n = grid.length;
  let maxLocal = Array.from({ length: n - 2 }, () => new Array(n - 2));

  for (let i = 0; i < n - 2; ++i) {
    for (let j = 0; j < n - 2; ++j) {
      let max = 0;
      for (let k = i; k < i + 3; ++k) {
        for (let m = j; m < j + 3; ++m) {
          max = Math.max(max, grid[k][m]);
        }
      }
      maxLocal[i][j] = max;
    }
  }

  return maxLocal;
};

let grid = [
  [9, 9, 8, 1],
  [5, 6, 2, 6],
  [8, 2, 6, 4],
  [6, 2, 2, 2],
];

console.log(largestLocal(grid));
// Input: grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
// Output: [[9,9],[8,6]]
// Explanation: The diagram above shows the original matrix and the generated matrix.
// Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.
