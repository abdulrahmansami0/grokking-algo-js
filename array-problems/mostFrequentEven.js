/**
 * @param {number[]} nums
 * @return {number}
 */
const mostFrequentEven = (nums) => {
  let hashMap = {};
  let max = 0;
  let result = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]]++;
    }
  }
  for (const [key, value] of Object.entries(hashMap)) {
    if (value > max && key % 2 === 0) {
      max = value;
      result = key;
    }
  }
  return result ? result : -1;
};

console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1]));
