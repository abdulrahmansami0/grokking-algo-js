const smallerNumbersThanCurrent = (nums) => {
  let count = 0;
  let arr = [];
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < nums.length; ++j) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    arr.push(count);
    count = 0;
  }
  return arr;
};

console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
