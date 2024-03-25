/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; ++i) {
    if (!map[nums[i]]) map[nums[i]] = 1;
    else map[nums[i]]++;
  }

  let result = [];

  Object.entries(map).forEach(([key, val]) => {
    if (val >= 2) {
      result.push(key);
    }
  });

  return result;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
