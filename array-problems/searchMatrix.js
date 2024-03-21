/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// time complexity O(n * log(n))
// space complexity O(1)
// var searchMatrix = function (matrix, target) {
//   let arr = matrix.flat();
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) return true;
//     else if (arr[mid] < target) left = mid + 1;
//     else if (target < arr[mid]) right = mid - 1;
//   }

//   return false;
// };

//  time complexity O(log(n * m))
var searchMatrix = function (matrix, target) {
  let left = 0;
  let right = matrix.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (matrix[mid][matrix[mid].length - 1] < target) left = mid + 1;
    else if (matrix[mid][0] > target) right = mid - 1;
    else {
      return binarySearch(matrix[mid], target);
    }
  }

  return false;
};

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return true;
    else if (arr[mid] < target) left = mid + 1;
    else if (target < arr[mid]) right = mid - 1;
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
