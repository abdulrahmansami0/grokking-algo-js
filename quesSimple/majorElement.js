const majorityElement = function (nums) {
  let hashChar = {};
  let max = 0;
  let maxNum = 0;

  for (const num of nums) {
    if (!hashChar[num]) hashChar[num] = 1;
    else hashChar[num]++;
  }

  Object.entries(hashChar).map(([key, val]) => {
    if (max < val) {
      max = val;
      maxNum = key;
    }
  });

  return maxNum;
};

console.log(majorityElement([3, 2, 3]));
