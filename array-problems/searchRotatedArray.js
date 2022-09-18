/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchRotatedArray = (nums, target) => {
  if (nums.length === 0 || nums === null) return false;

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  let pivot = left;
  left = 0;
  right = nums.length - 1;

  if (nums[pivot] <= target && target <= nums[right]) {
    left = pivot;
  } else {
    right = pivot;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;

console.log(searchRotatedArray(nums, target));
