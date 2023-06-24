/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let element = 0;
  let digit = 0;
  let arrDigit = nums.join("").split("");

  for (let i = 0; i < nums.length; ++i) {
    element += nums[i];
  }
  for (let i = 0; i < arrDigit.length; ++i) {
    digit += +arrDigit[i];
  }

  return element - digit;
};

console.log(differenceOfSum([1, 15, 6, 3]));
