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

//  Another solution
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {boolean}
//  */
// var containsNearbyDuplicate = function (nums, k) {

//   let left = 0;
//   let hash = new Map();

//   for (let right = 0; right < nums.length; ++right) {
//       hash.set(nums[right], (hash.get(nums[right]) || 0) + 1);

//       if (right - left > k) {
//           hash.set(nums[left], hash.get(nums[left]) - 1)
//           if (hash.get(nums[left]) === 0) {
//               hash.delete(nums[left]);
//           }
//           left++;
//       }

//       if (right - left <= k) {
//           for (let [key, value] of hash) {
//               if (value >= 2) {
//                   return true;
//               }
//           }
//       }
//   }

//   return false;
// };
