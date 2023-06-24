/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(2n)
const leftRightDifference = (nums) => {
  let answer = [];
  let leftSum = 0;
  let rightSum = nums.reduce((a, b) => a + b, 0);

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];

    answer[i] = Math.abs(leftSum - rightSum);
    leftSum += nums[i];
  }

  return answer;
};

console.log(leftRightDifference([10, 4, 8, 3]));

// O(n2)
const leftRightDifference2 = (nums) => {
  let answer = [];

  for (let i = 0; i < nums.length; ++i) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < nums.length; ++j) {
      if (i < j) {
        rightSum += nums[j];
      } else if (i > j) {
        leftSum += nums[j];
      }
    }
    answer[i] = Math.abs(leftSum - rightSum);
  }

  return answer;
};
