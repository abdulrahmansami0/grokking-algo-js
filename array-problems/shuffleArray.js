/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

const shuffle = (nums, n) => {
  let arr1 = [];
  let arr2 = [];
  let result = [];
  for (let i = 0; i < nums.length; ++i) {
    if (i >= n) {
      arr2.push(nums[i]);
    } else {
      arr1.push(nums[i]);
    }
  }
  for (let i = 0; i < arr1.length; ++i) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }
  return result;
};

let nums = [2, 5, 1, 3, 4, 7];
let n = 3;

console.log(shuffle(nums, n));
