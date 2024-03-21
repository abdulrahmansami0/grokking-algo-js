/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  let start = 0;
  let lessArr = [];
  let greaterArr = [];
  let pivotArr = [];

  while (start < nums.length) {
    if (nums[start] < pivot) {
      lessArr.push(nums[start]);
    } else if (nums[start] > pivot) {
      greaterArr.push(nums[start]);
    } else {
      pivotArr.push(nums[start]);
    }
    start++;
  }

  return [...lessArr, ...pivotArr, ...greaterArr];
};
