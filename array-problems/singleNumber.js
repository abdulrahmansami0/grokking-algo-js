const singleNumber = (nums) => {
  let hashChar = {};
  let min = Infinity;
  let minNum = 0;
  for (const num of nums) {
    if (!hashChar[num]) hashChar[num] = 1;
    else hashChar[num]++;
  }

  Object.entries(hashChar).map(([key, val]) => {
    if (min > val) {
      min = val;
      minNum = key;
    }
  });

  return minNum;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
