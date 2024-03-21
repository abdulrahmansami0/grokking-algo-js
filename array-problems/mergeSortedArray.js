/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Time O(n+m)log(n+m) | Space O(n);
var merge = function (nums1, m, nums2, n) {
  let clone = nums1.slice(0, m);
  let clone2 = nums2.slice(0, n);
  nums1 = nums1.fill(0);
  let count = 0;
  for (let i = 0; i < clone.length; ++i) {
    nums1[count++] = clone[i];
  }
  for (let i = 0; i < clone2.length; ++i) {
    nums1[count++] = clone2[i];
  }

  nums1.sort((a, b) => a - b);
};
