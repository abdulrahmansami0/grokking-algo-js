const runningSum = (nums) => {
  let arr = [];
  let number = 0;
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j <= i; ++j) {
      number = number + nums[j];
    }
    arr.push(number);
    number = 0;
  }
  return arr;
};

console.log(runningSum([1,2,3,4]));