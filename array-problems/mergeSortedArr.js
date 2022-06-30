var merge = function (nums1, m, nums2, n) {
  let newArr = [...nums1.slice(0, 3), ...nums2.slice(0, 3)];
  return newArr.sort((a, b) => a - b);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
