var containsNearbyDuplicate = function (nums, k) {
  let hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i]) && i - hash.get(nums[i]) <= k) {
      return true;
    } else {
      hash.set(nums[i], i);
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
