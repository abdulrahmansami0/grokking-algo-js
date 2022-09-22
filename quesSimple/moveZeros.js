var moveZeroes = function (nums) {
  let result = [];
  let countZeros = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== 0) {
      result.push(nums[i]);
    } else {
      countZeros++;
    }
  }
  for (let i = 0; i < countZeros; ++i) {
    result.push(0);
  }
  return result;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

// var moveZeroes = function(nums) {
//     if (nums.length == 0 || nums == null) return;
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             nums[count] = nums[i];
//             count++;
//         }
//     }
//     while (count < nums.length) {
//         nums[count] = 0;
//         count++
//     }
//     return;
// };