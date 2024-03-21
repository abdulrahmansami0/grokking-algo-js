/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  let result = [];
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      result.push(mid);

      let index = mid - 1;
      while (nums[index] === target && index >= 0) {
        result.unshift(index);
        index--;
      }

      index = mid + 1;
      while (nums[index] === target && index < nums.length) {
        result.push(index);
        index++;
      }
      break;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    }
  }

  return result;
};
