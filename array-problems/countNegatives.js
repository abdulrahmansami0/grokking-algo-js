/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let numRows = grid.length;
  let numCols = grid[0].length;
  let count = 0;

  for (let i = 0; i < numRows * numCols; i++) {
    const row = Math.floor(i / numCols);
    const col = i % numCols;
    const value = grid[row][col];
    if (value < 0) {
      count++;
    }
  }

  return count;
};

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0
