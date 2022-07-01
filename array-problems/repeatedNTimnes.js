const repeatedNTimes = function (nums) {
  let hash = {};
  let max = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  console.log(hash);
  Object.entries(hash).map(([_, val]) => {
    if (max < val) {
      max = val;
    }
  });
  return Object.keys(hash).find((key) => hash[key] === max);
};
console.log(repeatedNTimes([8, 3, 2, 3]));
