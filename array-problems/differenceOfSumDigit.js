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


// Input: nums = [1,15,6,3]
// Output: 9
// Explanation: 
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.