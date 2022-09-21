/**
 * @param {number[]} nums
 * @return {boolean}
 */
const divideArray = (nums) => {
  let hashMap = {};
  for (let i = 0; i < nums.length; ++i) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]]++;
    }
  }

  for (const [key, value] of Object.entries(hashMap)) {
    if (+value % 2 !== 0) {
      return false;
    }
  }
  return true;
};

console.log(divideArray([3, 2, 3, 2, 2, 2]));
