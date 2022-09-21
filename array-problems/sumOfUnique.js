/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = (nums) => {
  let hashMap = {};
  let sum = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]]++;
    }
  }
  for (const [key, value] of Object.entries(hashMap)) {
    if (value === 1) {
      sum += +key;
    }
  }
  return sum;
};

console.log(sumOfUnique([1, 2, 3, 2]));
