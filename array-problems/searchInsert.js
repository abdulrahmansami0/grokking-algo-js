/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// time complexity O(log(n))
// space complexity O(1)
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
  }

  return left;
};

// time complexity O(n)
// space complexity O(1)
// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; ++i) {
//     if (nums[i] === target) return i;
//     else if (nums[i] > target) return i;
//   }

//   return nums.length;
// };
