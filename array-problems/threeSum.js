const threeSum = (arr, targetSum) => {
  arr.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let currentSum = arr[i] + arr[left] + arr[right];
      if (currentSum === targetSum) {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      } else if (arr[i] + arr[left] + arr[right] > targetSum) {
        right--;
      } else if (arr[i] + arr[left] + arr[right] < targetSum) {
        left++;
      }
    }
  }
  return result;
};

console.log(threeSum([12, 3, 1, 2, -6, 5, -8, 6], 0));

/**
 *
 * @param {number[]} leetcode
 * @return {number[][]}
 */

const threeSum2 = (nums) => {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const triplets = [];
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        triplets.push([nums[i], nums[left], nums[right]]);
        left++;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return triplets;
};

console.log(threeSum2([12, 3, 1, 2, -6, 5, -8, 6]));
