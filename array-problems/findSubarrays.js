/**
 * @param {number[]} nums
 * @return {boolean}
 */
const findSubarraysEqualSum = (nums) => {
  let hashMap = {};
  for (let i = 0; i < nums.length - 1; ++i) {
    let sum = 0;
    for (let j = 0; j < 2; ++j) {
      sum += nums[j + i];
    }
    if (hashMap[sum]) return true;
    else hashMap[sum] = String(sum);
  }
  return false;
};

console.log(findSubarraysEqualSum([4, 2, 4]));

const findSubarrays = (nums) => {
  let sumSet = new Set();
  for (let i = 1; i < nums.length; ++i) {
    let sum = nums[i] + nums[i - 1];
    if (sumSet.has(sum)) return true;
    sumSet.add(sum);
  }
  return false;
};
