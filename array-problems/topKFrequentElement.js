/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// time O(n log n) | space O(n)
var topKFrequent = function (nums, k) {
  let hashMap = {};
  for (let i = 0; i < nums.length; ++i) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]]++;
    }
  }

  let arr = [];

  Object.entries(hashMap).map(([key, val]) => {
    arr.push({ key, val });
  });

  return arr
    .sort((a, b) => b.val - a.val)
    .slice(0, k)
    .map((item) => +item.key);
};
