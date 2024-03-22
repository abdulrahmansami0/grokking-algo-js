/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let prefix = 0;
  let result = 0;
  let map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; ++i) {
    prefix = (prefix + nums[i]) % k;
    if (prefix > 0) prefix += k;
    if (map.has(prefix)) {
      result += map.get(prefix);
      map.set(prefix, map.get(prefix) + 1);
    } else {
      map.set(prefix, 1);
    }
  }

  return result;
};
